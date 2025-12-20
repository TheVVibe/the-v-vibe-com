import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogs";

export async function generateStaticParams() {

  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // In a real app, we would fetch data based on the slug.
  // For now, we'll just display the slug title.

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <article className="pt-32 pb-24 container mx-auto px-4 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Article</span>
            <span>December 15, 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Sample Blog Post: {slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-hover" />
            <div>
              <p className="font-medium">Author Name</p>
              <p className="text-xs text-muted-foreground">Editor in Chief</p>
            </div>
          </div>
        </header>

        <div className="aspect-video bg-surface w-full rounded-2xl mb-12"></div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            This is a sample blog post. We are dynamically rendering this page based on the slug: <strong>{slug}</strong>.
          </p>

          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <blockquote>
            "The best way to predict the future is to create it."
          </blockquote>

          <h2>Why It Matters</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h3>Key Takeaways</h3>
          <ul>
            <li>Point one about the topic</li>
            <li>Another important detail to consider</li>
            <li>Final thoughts on the subject</li>
          </ul>

          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
