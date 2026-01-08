import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface RelatedBlogsProps {
  posts: BlogPost[];
}

export default function RelatedBlogs({ posts }: RelatedBlogsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  // Limit to 2 posts
  const displayPosts = posts.slice(0, 2);

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-surface rounded-2xl overflow-hidden hover:bg-surface-hover transition-colors"
          >
            <div className="aspect-video w-full bg-muted/20 relative overflow-hidden">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 font-bold text-xl">
                  {post.category}
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
