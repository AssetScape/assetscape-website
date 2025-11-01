import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Works for both project sites and user sites
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const isUserSite = repoName.endsWith('.github.io')
const base = process.env.BASE_PATH || (isUserSite ? '/' : `/${repoName}/`)

export default defineConfig({
  plugins: [react()],
  base
})
