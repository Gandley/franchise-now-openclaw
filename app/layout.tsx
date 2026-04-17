import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Franchise Now | AI Automation for Digital Business Owners',
  description: 'We build, install, and manage custom AI automations that help entrepreneurs automate lead handling, follow-up, and appointment booking. No tech headaches. Just results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
