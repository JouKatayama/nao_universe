import { chromium } from 'playwright'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SCREENSHOTS_DIR = join(__dirname, 'screenshots')
mkdirSync(SCREENSHOTS_DIR, { recursive: true })

const BASE = process.env.BASE_URL || 'http://localhost:3003'
const VIEWPORT = { width: 1440, height: 900 }

const scenes = [
  {
    id: '01-hero',
    url: '/',
    wait: 2000,
    scrolls: [],
  },
  {
    id: '02-core-question',
    url: '/',
    wait: 500,
    scrollTo: 'section:nth-of-type(2)',
  },
  {
    id: '03-schedule',
    url: '/',
    wait: 500,
    scrollTo: 'section:nth-of-type(3)',
  },
  {
    id: '04-how-it-works',
    url: '/',
    wait: 500,
    scrollTo: 'section:nth-of-type(4)',
  },
  {
    id: '05-voices',
    url: '/',
    wait: 500,
    scrollTo: 'section:nth-of-type(5)',
  },
  {
    id: '06-design-doc-preview',
    url: '/',
    wait: 500,
    scrollTo: 'section:nth-of-type(6)',
  },
  {
    id: '07-activity',
    url: '/',
    wait: 500,
    scrollTo: 'section:nth-of-type(7)',
  },
  {
    id: '08-supervisor',
    url: '/',
    wait: 500,
    scrollTo: 'section:nth-of-type(8)',
  },
  {
    id: '09-cta',
    url: '/',
    wait: 500,
    scrollTo: 'section:nth-of-type(10)',
  },
  {
    id: '10-about',
    url: '/about',
    wait: 1500,
    scrolls: [],
  },
  {
    id: '11-design-doc',
    url: '/design-doc',
    wait: 1500,
    scrolls: [],
  },
  {
    id: '12-design-doc-scroll',
    url: '/design-doc',
    wait: 500,
    scrollPx: 600,
  },
  {
    id: '13-reports',
    url: '/reports',
    wait: 1500,
    scrolls: [],
  },
  {
    id: '14-report-detail',
    url: '/reports/workshop-0',
    wait: 1500,
    scrolls: [],
  },
  {
    id: '15-voices-page',
    url: '/voices',
    wait: 1500,
    scrolls: [],
  },
  {
    id: '16-supervisor-page',
    url: '/supervisor',
    wait: 1500,
    scrolls: [],
  },
  {
    id: '17-join',
    url: '/join',
    wait: 1500,
    scrolls: [],
  },
  {
    id: '18-join-form',
    url: '/join',
    wait: 500,
    scrollPx: 800,
  },
  {
    id: '19-contact',
    url: '/contact',
    wait: 1500,
    scrolls: [],
  },
  {
    id: '20-contact-sponsor',
    url: '/contact/sponsor',
    wait: 1500,
    scrolls: [],
  },
  {
    id: '21-partners',
    url: '/partners',
    wait: 1500,
    scrolls: [],
  },
  {
    id: '22-media',
    url: '/media',
    wait: 1500,
    scrolls: [],
  },
]

async function main() {
  console.log('Launching browser...')
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({ viewport: VIEWPORT })
  const page = await context.newPage()

  let currentUrl = ''

  for (const scene of scenes) {
    const fullUrl = BASE + scene.url

    if (fullUrl !== currentUrl) {
      console.log(`  Navigating to ${scene.url}`)
      await page.goto(fullUrl, { waitUntil: 'networkidle' })
      currentUrl = fullUrl
      await page.waitForTimeout(scene.wait || 1000)
    }

    if (scene.scrollTo) {
      const el = await page.$(scene.scrollTo)
      if (el) {
        await el.scrollIntoViewIfNeeded()
        await page.waitForTimeout(500)
      }
    }

    if (scene.scrollPx) {
      await page.evaluate((px) => window.scrollBy(0, px), scene.scrollPx)
      await page.waitForTimeout(500)
    }

    const filepath = join(SCREENSHOTS_DIR, `${scene.id}.png`)
    await page.screenshot({ path: filepath, fullPage: false })
    console.log(`  Captured: ${scene.id}`)
  }

  await browser.close()
  console.log(`\nDone! ${scenes.length} screenshots saved to demo/screenshots/`)
}

main().catch(console.error)
