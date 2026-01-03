import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  badge?: string;
  link: string;
  image: string;
}

interface NicheSectionProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
  align?: "left" | "right" | "center";
}

export default function NicheSection({ id, title, description, products, align = "left" }: NicheSectionProps) {
  return (
    <section id={id} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mb-12 ${align === "center" ? "mx-auto text-center" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{title}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
