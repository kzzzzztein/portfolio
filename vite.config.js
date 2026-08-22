import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from https://USERNAME.github.io/portfolio/
// so every asset path needs the repo name as a prefix. Update BASE_PATH below
// if you rename the repository, then rebuild.
const BASE_PATH = '/portfolio/'

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
})
