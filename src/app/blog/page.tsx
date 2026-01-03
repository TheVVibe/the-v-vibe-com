import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export default function BlogListing() {
  const blogPosts = getAllPosts();

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <section className="pt-32 pb-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The V Vibe Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights, reviews, and guides to help you live your best life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary transition-colors"
            >
              <div className="aspect-video bg-surface-hover w-full relative">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-bold text-2xl">
                    {post.category}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-primary mb-3">
                  <span className="bg-primary/10 px-2 py-1 rounded-full">{post.category}</span>
                  <span className="text-muted-foreground">• {post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
