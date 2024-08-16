/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import aliasConfig from './vite.alias.config'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    ...aliasConfig
  }
})
