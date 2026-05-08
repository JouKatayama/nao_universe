import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type {
  DesignDoc,
  DesignDocFrontmatter,
  Report,
  ReportFrontmatter,
  Voice,
  Partner,
  MediaCoverage,
  UpcomingEvent,
  TocItem,
} from './types'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

export async function getDesignDoc(): Promise<DesignDoc> {
  const filePath = path.join(CONTENT_DIR, 'design-doc', 'current.mdx')
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  return {
    frontmatter: data as DesignDocFrontmatter,
    content,
    slug: 'current',
  }
}

export async function getDesignDocArchive(): Promise<DesignDoc[]> {
  const archiveDir = path.join(CONTENT_DIR, 'design-doc', 'archive')
  if (!fs.existsSync(archiveDir)) return []
  const files = fs.readdirSync(archiveDir).filter((f) => f.endsWith('.mdx'))
  return files
    .map((filename) => {
      const filePath = path.join(archiveDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)
      return {
        frontmatter: data as DesignDocFrontmatter,
        content,
        slug: filename.replace('.mdx', ''),
      }
    })
    .sort((a, b) =>
      b.frontmatter.version.localeCompare(a.frontmatter.version)
    )
}

export async function getReports(): Promise<Report[]> {
  const reportsDir = path.join(CONTENT_DIR, 'reports')
  if (!fs.existsSync(reportsDir)) return []
  const files = fs.readdirSync(reportsDir).filter((f) => f.endsWith('.mdx'))
  return files
    .map((filename) => {
      const filePath = path.join(reportsDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)
      return {
        frontmatter: data as ReportFrontmatter,
        content,
        slug: filename.replace('.mdx', ''),
      }
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
}

export async function getReport(slug: string): Promise<Report | null> {
  const reports = await getReports()
  return reports.find((r) => r.slug === slug) ?? null
}

export async function getVoices(): Promise<Voice[]> {
  const filePath = path.join(CONTENT_DIR, 'voices', 'voices.json')
  if (!fs.existsSync(filePath)) return []
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const voices: Voice[] = JSON.parse(fileContent)
  return voices.filter((v) => v.publicAllowed)
}

export async function getPartners(): Promise<Partner[]> {
  const filePath = path.join(CONTENT_DIR, 'partners', 'partners.json')
  if (!fs.existsSync(filePath)) return []
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(fileContent) as Partner[]
}

export async function getMediaCoverages(): Promise<MediaCoverage[]> {
  const filePath = path.join(CONTENT_DIR, 'media', 'media.json')
  if (!fs.existsSync(filePath)) return []
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const items: MediaCoverage[] = JSON.parse(fileContent)
  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getUpcomingEvent(): Promise<UpcomingEvent | null> {
  const filePath = path.join(CONTENT_DIR, 'events', 'upcoming.json')
  if (!fs.existsSync(filePath)) return null
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(fileContent) as UpcomingEvent
}

export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const items: TocItem[] = []
  let match: RegExpExecArray | null
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w぀-ゟ゠-ヿ一-鿿]+/g, '-')
      .replace(/^-|-$/g, '')
    items.push({ id, text, level })
  }
  return items
}
