
import { Layout } from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By using IPL Stats Symphony, you agree to follow these Terms and Conditions. If you do not agree, please do not use our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Content</h2>
          <p>
            The information on IPL Stats Symphony is for general reference. While we try to keep it accurate, we do not guarantee its correctness. Users should verify details before relying on them.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
          <p>
            All text, images, and other content on this website belong to IPL Stats Symphony or our content providers. You may not copy or use them without permission, as per the Copyright Act, 1957.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Responsibilities</h2>
          <p>
            When using IPL Stats Symphony, you must not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Break any Indian laws, including the Information Technology Act, 2000</li>
            <li>Try to hack or gain unauthorized access to our website</li>
            <li>Spread viruses, spam, or harmful content</li>
            <li>Copy or share content without permission</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Disclaimer and Liability</h2>
          <p>
            We are not responsible for any losses, damages, or issues caused by using our website. This includes errors in data, website downtime, or third-party links.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Terms</h2>
          <p>
            We may update these terms as needed. By continuing to use IPL Stats Symphony, you accept any changes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Governing Law</h2>
          <p>
          The content on this website is provided solely for informational and educational purposes and should not be considered as professional advice.
          </p>
        </div>

      </div>
    </Layout>
  );
};

export default Terms;
