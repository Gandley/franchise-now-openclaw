import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-3">
              <Image src="/logo.jpg" alt="Franchise Now" width={52} height={52} className="rounded-full" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              We build and manage custom AI automation systems that capture leads, automate follow-up, and fill your calendar — so you can focus on closing.
            </p>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Company</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/book" className="hover:text-white transition-colors">Book a Call</Link>
            </div>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Resources</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/free-guide" className="hover:text-white transition-colors">Free Guide</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Franchise Now. All rights reserved.</p>
          <p className="text-sm">AI Automation for Digital Business Owners</p>
        </div>
      </div>
    </footer>
  )
}
