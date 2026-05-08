import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { FloatingShapes } from '@/components/illustrations/FloatingShapes'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="pt-28 pb-20 min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px]">
        <FloatingShapes className="w-full h-full opacity-30" />
      </div>
      <div className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px] pointer-events-none" />
      <Container className="text-center relative">
        <p className="stat-number text-8xl md:text-9xl mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
          ページが見つかりません
        </h1>
        <p className="text-text-secondary mb-10 max-w-md mx-auto leading-relaxed">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/">
            <Home className="w-4 h-4" />
            トップページへ
          </Button>
          <Button variant="secondary" href="/about">
            プロジェクトについて
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </div>
  )
}
