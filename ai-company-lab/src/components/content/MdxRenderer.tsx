import { renderMdx } from '@/lib/mdx'

interface MdxRendererProps {
  source: string
}

export async function MdxRenderer({ source }: MdxRendererProps) {
  const content = await renderMdx(source)

  return (
    <article className="prose prose-lg max-w-prose prose-headings:text-white prose-p:text-text-secondary prose-strong:text-white prose-a:text-accent prose-blockquote:text-accent-light prose-blockquote:border-accent prose-li:text-text-secondary prose-code:text-accent">
      {content}
    </article>
  )
}
