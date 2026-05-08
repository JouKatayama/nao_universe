'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import type { TocItem } from '@/lib/types'

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-96px 0px -80% 0px' }
    )

    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav className="sticky top-24" aria-label="目次">
      <h2 className="text-sm font-semibold text-white mb-4">目次</h2>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li
            key={item.id}
            className={cn(
              item.level === 3 && 'ml-4',
            )}
          >
            <a
              href={`#${item.id}`}
              className={cn(
                'block py-1 transition-colors',
                activeId === item.id
                  ? 'text-accent font-medium'
                  : 'text-text-muted hover:text-text-secondary'
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
