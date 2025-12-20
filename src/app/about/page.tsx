import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us - TheVVibe.com",
  description: "Learn more about TheVVibe.com and our mission to provide honest, detailed product reviews and recommendations.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <section className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About TheVVibe.com</h1>

        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl text-muted-foreground mb-8">
            Your ultimate destination for honest product reviews, top-tier recommendations, and the best deals on the web.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            At TheVVibe.com, we believe that finding the right product shouldn't be a hassle.
            With endless options available online, it's easy to get overwhelmed by noise and conflicting information.
            Our mission is to cut through the clutter and bring you <strong>"The Vibe"</strong>—products that truly elevate your lifestyle.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Work</h2>
          <p className="mb-6">
            We are an affiliate marketing website, which means we earn a commission when you purchase products through our links.
            However, this does not influence our reviews or rankings. Our team spends hours researching, comparing, and analyzing real user feedback to ensure we only recommend products that we believe in.
          </p>
          <p className="mb-6">
            We provide detailed and honest overviews of each product, highlighting both the pros and cons so you can make an informed decision.
            Values like transparency and authenticity are at the core of everything we do.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Trust Us?</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Unbiased Reviews:</strong> We recommend what is best for you, not just what pays the most.</li>
            <li><strong>In-Depth Research:</strong> We dive deep into specs, features, and real-world performance.</li>
            <li><strong>Curated Selections:</strong> We only feature products that meet our high standards for quality and value.</li>
          </ul>

          <p className="border-t border-border pt-8 mt-12 text-sm text-muted-foreground">
            Thank you for trusting TheVVibe.com. If you have any questions or suggestions, feel free to reach out!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
