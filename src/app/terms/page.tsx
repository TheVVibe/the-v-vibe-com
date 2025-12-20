import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - TheVVibe.com",
  description: "Terms of Service for using TheVVibe.com.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <section className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg dark:prose-invert space-y-6">
          <p>
            Please read these Terms of Service carefuly before using TheVVibe.com.
            By accessing or using the Service, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-bold">1. Affiliate Disclosure</h2>
          <p>
            TheVVibe.com is a participant in various affiliate programs designed to provide a means for sites to earn advertising fees
            by advertising and linking to third-party retailers. This means that when you click on links to various merchants on this site
            and make a purchase, this can result in this site earning a commission. This comes at no extra cost to you.
          </p>

          <h2 className="text-2xl font-bold">2. Use of Site</h2>
          <p>
            The content provided on TheVVibe.com is for general informational purposes only.
            While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind about
            the completeness, accuracy, reliability, suitability, or availability of the information, products, or services contained on the website.
          </p>

          <h2 className="text-2xl font-bold">3. Product Liability</h2>
          <p>
            We review and recommend products, but we do not manufacture or sell them directly.
            Any issues, disputes, or concerns regarding a product purchased through a link on our site must be directed to the
            respective seller or manufacturer. We are not liable for any damages or losses related to the purchase or use of these products.
          </p>

          <h2 className="text-2xl font-bold">4. Intellectual Property</h2>
          <p>
            The content, layout, design, data, and graphics on this website are protected by intellectual property laws.
            You may not reproduce, download, transmit, or distribute any part of this site without our prior written permission.
          </p>

          <h2 className="text-2xl font-bold">5. External Links</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by TheVVibe.com.
            We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
          </p>

          <h2 className="text-2xl font-bold">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective,
            you agree to be bound by the revised terms.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
