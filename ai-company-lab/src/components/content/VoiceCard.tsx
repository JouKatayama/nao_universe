import { Quote } from 'lucide-react'
import type { Voice } from '@/lib/types'

export function VoiceCard({ voice }: { voice: Voice }) {
  return (
    <div className="group card rounded-2xl p-7 h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/25 to-accent/5 border border-accent/15 flex items-center justify-center">
          <span className="text-accent text-sm font-bold">
            {voice.attribute.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-xs text-white font-medium">{voice.attribute}</p>
          <p className="text-xs text-text-muted">第{voice.workshopNumber}回参加</p>
        </div>
        <Quote className="w-5 h-5 text-accent/15 ml-auto group-hover:text-accent/30 transition-colors duration-300" strokeWidth={1.5} />
      </div>
      <blockquote className="text-text-secondary text-sm leading-[1.9]">
        {voice.quote}
      </blockquote>
    </div>
  )
}
