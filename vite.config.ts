import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import aliasConfig from './vite.alias.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    ...aliasConfig
  },
})
