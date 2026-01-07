import Link from "next/link";

interface ProductProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  badge?: string;
  link: string;
  image: string;
}

export default function ProductCard({
  title,
  description,
  price,
  rating,
  badge,
  link,
  image,
}: ProductProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {/* Product Image */}
      <div className="h-48 w-full relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay for subtle darkening on hover if needed, or keeping it clean */}
      </div>

      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white z-10">
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
              fill={i < Math.floor(rating) ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              className="w-3.5 h-3.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          ))}
          <span className="text-xs text-muted-foreground ml-1">({rating})</span>
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="mt-auto flex items-center justify-between gap-4">
          <span className="text-xl font-bold text-secondary text-nowrap">{price}</span>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn btn-primary"
          >
            Buy Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
