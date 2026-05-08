'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/constants'
import { Button } from '@/components/shared/Button'

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        'md:hidden fixed inset-0 top-16 bg-primary-dark/95 backdrop-blur-2xl transition-all duration-300 z-40',
        open
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none -translate-y-2'
      )}
    >
      <nav className="flex flex-col px-6 py-8 gap-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-base text-text-secondary hover:text-white py-3 border-b border-white/[0.04] transition-colors duration-200"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="text-base text-text-secondary hover:text-white py-3 border-b border-white/[0.04] transition-colors duration-200"
          onClick={onClose}
        >
          お問い合わせ
        </Link>
        <div className="mt-6">
          <Button variant="primary" size="lg" href="/join" className="w-full">
            参加申込
          </Button>
        </div>
      </nav>
    </div>
  )
}
