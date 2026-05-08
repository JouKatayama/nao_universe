import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const mdxComponents = {
  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <blockquote
      className="border-l-4 border-accent pl-6 italic text-accent-light my-6"
      {...props}
    />
  ),
  table: (props: React.ComponentProps<'table'>) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  a: (props: React.ComponentProps<'a'>) => {
    const isExternal = props.href?.startsWith('http')
    return (
      <a
        className="text-accent hover:text-accent-light underline underline-offset-4"
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      />
    )
  },
}

export async function renderMdx(source: string) {
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      },
    },
    components: mdxComponents,
  })

  return content
}
