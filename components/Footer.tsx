import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <Image src="/logo-black.jpg" alt="Franchise Now" width={240} height={240} />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              We help lean businesses install their first AI workforce — trained AI operators that grow revenue, support customers, and run work 24/7 without adding headcount.
            </p>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Company</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/services" className="hover:text-white transition-colors">What We Build</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link 
                href="/book-call"
                className="hover:text-white transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Resources</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/get-access" className="hover:text-white transition-colors">Free Course & Community</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Franchise Now. All rights reserved.</p>
          <p className="text-sm">AI Workforce for Lean Businesses</p>
        </div>
      </div>
    </footer>
  )
}
