import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NicheSection from "@/components/NicheSection";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

import { techProducts, homeProducts, lifestyleProducts } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <Hero />

      <Features />

      <div className="bg-gradient-to-b from-background via-surface to-background w-full">
        <NicheSection
          id="top-tech"
          title="Top Tech & Gadgets"
          description="Upgrade your workflow and entertainment with the latest and greatest in technology."
          products={techProducts}
        />

        <NicheSection
          id="home-essentials"
          title="Home Essentials"
          description="Curated picks to elevate your living space and simplify your daily routines."
          products={homeProducts}
          align="center"
        />

        <NicheSection
          id="lifestyle"
          title="Lifestyle & Wellness"
          description="Invest in yourself with products designed to improve your health, style, and wellbeing."
          products={lifestyleProducts}
        />
      </div>

      <Testimonials />

      <section id="newsletter" className="py-24 container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto glass-panel p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

          <h2 className="text-3xl font-bold mb-4 z-10 relative">Never Miss a <span className="text-secondary">Great Deal</span></h2>
          <p className="text-muted-foreground mb-8 z-10 relative">
            Join 10,000+ others getting the best finds delivered straight to their inbox. No spam, just value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto z-10 relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-surface/50 border border-border text-foreground rounded-full px-6 py-3 focus:outline-hidden focus:border-primary transition-colors text-sm"
            />
            <button className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
