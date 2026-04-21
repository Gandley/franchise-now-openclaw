'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpg" alt="Franchise Now" width={44} height={44} className="rounded-full" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">What We Build</Link>
            <Link href="/get-access" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Free Course & Community</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">About</Link>
            <Link 
              href="/book-call"
              className="btn-primary py-2 px-5 text-sm"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-brand-900"></div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/services" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>What We Build</Link>
            <Link href="/get-access" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>Free Course & Community</Link>
            <Link href="/about" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>About</Link>
            <Link 
              href="/book-call"
              className="btn-primary text-sm text-center"
              onClick={() => setOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
