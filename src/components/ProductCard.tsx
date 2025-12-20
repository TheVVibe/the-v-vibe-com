import Link from "next/link";

interface ProductProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  badge?: string;
  link: string;
  colorFrom?: string; // Gradient color start
  colorTo?: string;   // Gradient color end
}

export default function ProductCard({
  title,
  description,
  price,
  rating,
  badge,
  link,
  colorFrom = "from-indigo-500",
  colorTo = "to-purple-500",
}: ProductProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {/* Image Placeholder with Gradient */}
      <div className={`h-48 w-full bg-linear-to-br ${colorFrom} ${colorTo} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
        <span className="text-white/80 font-medium tracking-widest uppercase">Product Image</span>
      </div>

      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white">
          {badge}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-1 mb-2 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={i < rating ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              className="w-3.5 h-3.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          ))}
          <span className="text-xs text-muted-foreground ml-1">({rating}.0)</span>
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-secondary">{price}</span>
          <Link
            href={link}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            Check Price
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
