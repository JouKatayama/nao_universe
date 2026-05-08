import type { MetadataRoute } from 'next'
import { getReports, getDesignDocArchive } from '@/lib/content'
import { SITE_URL } from '@/lib/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    '', '/about', '/design-doc', '/design-doc/archive',
    '/reports', '/voices', '/supervisor',
    '/partners', '/media', '/join',
    '/contact', '/contact/sponsor', '/contact/partnership',
    '/contact/media', '/contact/general',
  ]

  const reports = await getReports()
  const archives = await getDesignDocArchive()

  const staticEntries = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const reportEntries = reports.map((r) => ({
    url: `${SITE_URL}/reports/${r.slug}`,
    lastModified: new Date(r.frontmatter.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  const archiveEntries = archives.map((d) => ({
    url: `${SITE_URL}/design-doc/archive/${d.slug}`,
    lastModified: new Date(d.frontmatter.lastUpdated),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [...staticEntries, ...reportEntries, ...archiveEntries]
}
