import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Franchise Now',
  description: 'Terms of Service for Franchise Now.',
}

export default function TermsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
        <h1>Terms of Service</h1>
        <p className="text-gray-500 text-sm">Last updated: April 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>

        <h2>Use of the Website</h2>
        <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others. You must not use the site in any way that is unlawful, harmful, or fraudulent.</p>

        <h2>Intellectual Property</h2>
        <p>All content on this website, including text, graphics, logos, and images, is the property of Franchise Now and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

        <h2>Services and Pricing</h2>
        <p>Service pricing and availability are subject to change without notice. Specific service agreements, pricing, and terms will be outlined in separate written agreements between Franchise Now and clients.</p>

        <h2>Disclaimer of Warranties</h2>
        <p>This website and its content are provided "as is" without warranties of any kind. We do not guarantee specific business results. Individual outcomes vary based on business type, effort, market conditions, and other factors.</p>

        <h2>Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Franchise Now shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our services.</p>

        <h2>Governing Law</h2>
        <p>These terms are governed by applicable laws. Any disputes shall be resolved in accordance with those laws.</p>

        <h2>Changes to Terms</h2>
        <p>We reserve the right to update these Terms of Service at any time. Continued use of the website following any changes constitutes acceptance of the new terms.</p>

        <h2>Contact</h2>
        <p>If you have questions about these Terms of Service, please contact us through the contact form on our website.</p>
      </div>
    </section>
  )
}
