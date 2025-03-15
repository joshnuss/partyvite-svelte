import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { cloudflare } from '@cloudflare/vite-plugin'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), cloudflare()],
  resolve: {
    alias: {
      '$shared': path.resolve(__dirname, './shared'),
    }
  }
})
