export default function Testimonials() {
  const reviews = [
    {
      name: "Alex Johnson",
      role: "Tech Enthusiast",
      text: "I found the perfect monitor for my setup thanks to TheVVibe.com. The detailed comparison was a game changer.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Home Designer",
      text: "The home essentials list is curated perfectly. I bought the coffee maker recommeneded and I love it!",
      rating: 5,
    },
    {
      name: "Mike Davies",
      role: "Fitness Coach",
      text: "Honest reviews that actually test the products. Saved me from buying a cheap knockoff.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by <span className="text-gradient">Real People</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl relative">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
