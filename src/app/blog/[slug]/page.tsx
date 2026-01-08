import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug, getRelatedPosts, markdownToHtml } from "@/lib/blog";
import RelatedBlogs from "@/components/RelatedBlogs";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const content = await markdownToHtml(post.content);
  const relatedPosts = post.relatedBlogs ? getRelatedPosts(post.relatedBlogs) : [];

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
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{post.category}</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-hover" />
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-xs text-muted-foreground">Editor in Chief</p>
            </div>
          </div>
        </header>

        <div className="aspect-video bg-surface w-full rounded-2xl mb-12 relative overflow-hidden flex items-center justify-center bg-surface-hover">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-4xl font-bold text-muted-foreground/20">{post.category}</span>
          )}
        </div>

        <div
          className="prose dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted prose-strong:text-foreground prose-li:text-muted prose-a:text-primary hover:prose-a:text-primary-hover prose-a:font-medium prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <RelatedBlogs posts={relatedPosts} />
      </article>

      <Footer />
    </main>
  );
}
