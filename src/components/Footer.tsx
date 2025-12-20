import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">TheVVibe.com</h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              Discovering the absolute best products, deals, and honest reviews across all categories.
              We do the research so you don't have to.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/category/top-tech" className="hover:text-primary transition-colors">Top Tech</Link></li>
              <li><Link href="/category/home-essentials" className="hover:text-primary transition-colors">Home Essentials</Link></li>
              <li><Link href="/category/lifestyle" className="hover:text-primary transition-colors">Lifestyle</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TheVVibe.com. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
