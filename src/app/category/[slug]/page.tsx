
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NicheSection from "@/components/NicheSection";
import { techProducts, homeProducts, lifestyleProducts } from "@/data/products";

// Map slugs to category metadata and products
const categoryMap: Record<string, {
  title: string;
  description: string;
  products: typeof techProducts
}> = {
  "top-tech": {
    title: "Top Tech & Gadgets",
    description: "Upgrade your workflow and entertainment with the latest and greatest in technology.",
    products: techProducts
  },
  "home-essentials": {
    title: "Home Essentials",
    description: "Curated picks to elevate your living space and simplify your daily routines.",
    products: homeProducts
  },
  "lifestyle": {
    title: "Lifestyle & Wellness",
    description: "Invest in yourself with products designed to improve your health, style, and wellbeing.",
    products: lifestyleProducts
  }
};

export function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({
    slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryMap[slug];

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <div className="pt-24 min-h-screen flex flex-col">
        {/* Hero for Category */}
        <section className="py-16 md:py-24 bg-surface/30">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{category.title}</h1>
            <p className="text-xl text-muted-foreground">{category.description}</p>
          </div>
        </section>

        {/* Reusing NicheSection for product display but without ID scrolling issues if possible, 
            or we can just manually render the grid if NicheSection is too specific.
            Checking NicheSection implementation might be good, but assuming it renders products based on props.
            It likely has an ID prop which we might not want to conflict or maybe it is fine.
            Let's use it as it provides consistency.
        */}
        <div className="flex-1 bg-linear-to-b from-background via-surface to-background w-full">
          <NicheSection
            id={slug}
            title={`Best in ${category.title}`}
            description="Hand-picked favorites just for you."
            products={category.products}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
