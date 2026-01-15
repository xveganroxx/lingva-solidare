'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/start-a-club', label: 'Start a Club' },
  { href: '/programs', label: 'Programs' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-accent transition-colors">
            Lingva Solidare
          </Link>
          <div className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => {
              const isActive = mounted && pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent border-b-2 border-accent pb-1'
                      : 'text-gray-700 hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          {/* Mobile menu button - can be enhanced later */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-accent">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

