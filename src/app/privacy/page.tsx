import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - TheVVibe.com",
  description: "Privacy Policy for TheVVibe.com. Learn how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <section className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg dark:prose-invert space-y-6">
          <p>
            Welcome to TheVVibe.com. We respect your privacy and are committed to protecting it.
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-2xl font-bold">1. Information We Collect</h2>
          <p>
            <strong>Personal Information:</strong> We do not require you to create an account or log in to use our website.
            We do not collect personal usage data or tracking information tied to your identity.
          </p>
          <p>
            <strong>Email Newsletter:</strong> If you verify to subscribe to our newsletter, we will collect your email address
            solely for the purpose of sending you updates about future reviews, recommendations, and deals.
            We do not sell or share your email with third parties.
          </p>

          <h2 className="text-2xl font-bold">2. Affiliate Links and Third-Party Sites</h2>
          <p>
            Our website contains affiliate links to third-party websites (such as Amazon and other retailers).
            If you click on these links, you will be directed to that third party's site.
            We are not responsible for the privacy practices or content of those third-party sites.
            We encourage you to review their privacy policies before providing them with any personal information.
          </p>

          <h2 className="text-2xl font-bold">3. Cookies</h2>
          <p>
            We may use cookies to improve your experience on our site. These cookies are small text files stored on your device.
            You can choose to disable cookies through your browser settings, though this may affect some site functionality.
            Third-party vendors, including Google, use cookies to serve ads based on prior visits to our website or other websites.
          </p>

          <h2 className="text-2xl font-bold">4. Children's Privacy</h2>
          <p>
            Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-bold">5. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-bold">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us via our website.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
