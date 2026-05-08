import type { NavItem } from './types'

export const SITE_NAME = 'AIの会社を、AIで考える。'
export const SITE_DESCRIPTION =
  'AI時代の理想の会社を、若者と一緒にAIで設計し、公共財として継続的に編纂するプロジェクト。'
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-company-lab.jp'

export const ORGANIZATION = {
  name: '特定非営利活動法人キャリアキャンパス',
  disclaimer:
    '本プロジェクトは高橋直也個人および特定非営利活動法人キャリアキャンパスによる取り組みであり、所属企業の公式な見解・監修・協賛を示すものではありません。',
}

export const EXTERNAL_LINKS = {
  substack: '',
  twitter: '',
  linkedin: '',
  note: '',
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: '設計書', href: '/design-doc' },
  { label: 'レポート', href: '/reports' },
  { label: '参加者の声', href: '/voices' },
  { label: '監修者', href: '/supervisor' },
]

export const FOOTER_LINKS = {
  project: [
    { label: 'About', href: '/about' },
    { label: '監修者', href: '/supervisor' },
    { label: 'パートナー', href: '/partners' },
    { label: 'メディア', href: '/media' },
  ],
  content: [
    { label: '設計書', href: '/design-doc' },
    { label: 'レポート', href: '/reports' },
    { label: '参加者の声', href: '/voices' },
  ],
  contact: [
    { label: '参加申込', href: '/join' },
    { label: '企業協賛', href: '/contact/sponsor' },
    { label: '大学・自治体連携', href: '/contact/partnership' },
    { label: 'メディア取材', href: '/contact/media' },
    { label: 'その他', href: '/contact/general' },
  ],
}
