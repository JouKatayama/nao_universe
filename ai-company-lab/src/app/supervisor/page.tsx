import type { Metadata } from 'next'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Container } from '@/components/shared/Container'
import { MdxRenderer } from '@/components/content/MdxRenderer'
import { Button } from '@/components/shared/Button'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '監修者プロフィール',
  description: '本プロジェクト監修者 高橋直也のプロフィール。',
}

export default async function SupervisorPage() {
  const filePath = path.join(process.cwd(), 'src', 'content', 'supervisor', 'profile.mdx')
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return (
    <>
      {/* Hero Profile Header */}
      <section className="relative pt-28 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ai-abstract.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/90 to-primary" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
        </div>
        <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-[100px] pointer-events-none" />
        <Container size="narrow">
          <div className="relative">
            <Button variant="tertiary" href="/about" className="mb-8">
              <ArrowLeft className="w-4 h-4" />
              プロジェクトについて
            </Button>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/10">
                <span className="text-4xl font-bold text-accent">
                  {(data.name as string)?.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-2">
                  Supervisor
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{data.name}</h1>
                <p className="text-accent-light text-base">{data.title} / {data.organization}</p>
              </div>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </section>

      {/* Profile Content */}
      <section className="py-16 md:py-24">
        <Container size="narrow">
          <MdxRenderer source={content} />
          <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="/about">プロジェクトについて</Button>
            <Button variant="secondary" href="/join">参加申込</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
