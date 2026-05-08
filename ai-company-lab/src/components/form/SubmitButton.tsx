'use client'

import { useFormStatus } from 'react-dom'
import { cn } from '@/lib/utils'

export function SubmitButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-300',
        'bg-gradient-to-r from-accent to-accent-light text-primary-dark shadow-lg shadow-accent/20',
        'hover:shadow-accent/30 hover:brightness-110',
        'disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:brightness-100',
        className
      )}
    >
      {pending ? (
        <>
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          送信中...
        </>
      ) : (
        children
      )}
    </button>
  )
}
