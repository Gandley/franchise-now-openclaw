import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Franchise Now',
  description: 'Privacy Policy for Franchise Now.',
}

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
        <h1>Privacy Policy</h1>
        <p className="text-gray-500 text-sm">Last updated: April 2026</p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us, such as your name, email address, and any other information you choose to provide when you fill out a form on our website, book a call, or download our free resources.</p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to communicate with you, deliver the resources you request, send relevant email communications, and improve our services. We do not sell your personal information to third parties.</p>

        <h2>Email Communications</h2>
        <p>By providing your email address, you consent to receive email communications from Franchise Now. You may unsubscribe at any time by clicking the unsubscribe link in any email we send.</p>

        <h2>Cookies</h2>
        <p>We use cookies to improve your browsing experience and analyze website traffic. You can control cookie settings through your browser.</p>

        <h2>Third-Party Services</h2>
        <p>We use third-party services including Calendly for booking and email marketing platforms. These services have their own privacy policies governing the use of your information.</p>

        <h2>Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us through the booking page or contact form on our website.</p>
      </div>
    </section>
  )
}
