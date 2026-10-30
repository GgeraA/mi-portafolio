import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base:
    process.env.GITHUB_ACTIONS === 'true' &&
    process.env.GITHUB_REPOSITORY?.split('/')[1] &&
    !process.env.GITHUB_REPOSITORY.split('/')[1].endsWith('.github.io')
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
      : '/',
  plugins: [tailwindcss(), react()],
})
