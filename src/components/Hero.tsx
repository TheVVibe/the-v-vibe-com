import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-border text-xs font-medium text-primary mb-6 animate-fade-in-up backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          New Deals Added Daily
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Stop searching, <br />
          start <span className="text-gradient">living the Vibe.</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          TheVVibe.com curates the absolute best products, deals, and honest reviews.
          We filter out the noise so you find the top choice instantly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#top-tech"
            className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto"
          >
            Explore Top Picks
          </Link>
          <Link
            href="#newsletter"
            className="px-8 py-4 bg-surface/50 hover:bg-surface border border-border text-foreground font-semibold rounded-full transition-all w-full sm:w-auto"
          >
            Join Newsletter
          </Link>
        </div>
      </div>
    </section>
  );
}
