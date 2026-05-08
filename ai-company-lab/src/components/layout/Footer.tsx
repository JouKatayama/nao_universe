import Link from 'next/link'
import { Container } from '@/components/shared/Container'
import { SITE_NAME, ORGANIZATION, FOOTER_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="relative bg-primary-dark">
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <span className="text-[10px] font-black text-primary-dark tracking-tighter">AI</span>
              </div>
              <span className="font-bold text-white text-sm tracking-wide">AI Company Lab</span>
            </div>
            <p className="text-text-muted text-xs leading-relaxed">{SITE_NAME}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-5">
              プロジェクト
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.project.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-muted hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-5">
              コンテンツ
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.content.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-muted hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-5">
              お問い合わせ
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.contact.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-muted hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.04]">
          <p className="text-xs text-text-muted">
            &copy; 2026 {ORGANIZATION.name}
          </p>
          <p className="text-xs text-text-muted/60 mt-2 leading-relaxed max-w-2xl">
            {ORGANIZATION.disclaimer}
          </p>
        </div>
      </Container>
    </footer>
  )
}
