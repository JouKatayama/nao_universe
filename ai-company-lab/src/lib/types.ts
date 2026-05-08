export interface DesignDocFrontmatter {
  version: string
  lastUpdated: string
  title: string
  status: 'current' | 'archived' | 'draft'
  changeNote?: string
}

export interface DesignDoc {
  frontmatter: DesignDocFrontmatter
  content: string
  slug: string
}

export interface ReportFrontmatter {
  title: string
  workshopNumber: string
  date: string
  participantCount: number
  format: 'online' | 'offline-osaka' | 'hybrid'
  mainThemes: string[]
  externalUrl?: string
  excerpt: string
}

export interface Report {
  frontmatter: ReportFrontmatter
  content: string
  slug: string
}

export interface Voice {
  id: string
  quote: string
  attribute: string
  workshopNumber: string
  consentDate: string
  publicAllowed: boolean
}

export type PartnerTier = 'launch' | 'standard' | 'premium'

export interface Partner {
  id: string
  name: string
  logoPath: string
  websiteUrl: string
  description: string
  since: string
  tier: PartnerTier
}

export interface MediaCoverage {
  id: string
  title: string
  publication: string
  date: string
  url: string
  summary: string
}

export interface EventDate {
  date: string
  dayOfWeek: string
  time: string
}

export interface UpcomingEvent {
  title: string
  dates: EventDate[]
  format: string
  platform: string
  fee: string
  capacity: number
  formUrl: string
}

export interface SupervisorFrontmatter {
  name: string
  title: string
  organization: string
}

export interface SupervisorProfile {
  frontmatter: SupervisorFrontmatter
  content: string
}

export interface TocItem {
  id: string
  text: string
  level: 2 | 3
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type BadgeVariant = 'accent' | 'subtle'
export type CardVariant = 'default' | 'bordered' | 'accent-border'
export type ContainerSize = 'default' | 'narrow' | 'wide'
