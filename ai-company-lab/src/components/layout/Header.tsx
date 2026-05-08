'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/constants'
import { Button } from '@/components/shared/Button'
import { MobileMenu } from './MobileMenu'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-primary/80 backdrop-blur-2xl border-b border-white/[0.06]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-content mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow duration-300">
              <span className="text-[10px] font-black text-primary-dark tracking-tighter">AI</span>
            </div>
            <span className="font-bold text-white text-sm tracking-wide">
              AI Company Lab
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-text-muted hover:text-white rounded-lg hover:bg-white/[0.04] transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-4">
              <Button variant="primary" size="sm" href="/join">
                参加申込
              </Button>
            </div>
          </nav>

          <button
            className="md:hidden p-2 text-white rounded-lg hover:bg-white/[0.06] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニュー"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
