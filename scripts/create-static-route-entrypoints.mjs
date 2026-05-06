import { copyFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const distDir = 'dist'

const routes = [
  '3d-data-wrapper',
  'brochure',
  'projects/m3-j2-4a',
  'projects/cctv-suitability',
  'projects/highways-technology',
  'projects/nh-ccmt',
  'projects/nh-road-lighting',
  'projects/nh-drainage',
]

for (const route of routes) {
  const routeDir = join(distDir, route)
  mkdirSync(routeDir, { recursive: true })
  copyFileSync(join(distDir, 'index.html'), join(routeDir, 'index.html'))
}
