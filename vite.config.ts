import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {viteStaticCopy} from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: [
    "**/*.mp3"
  ],
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/README.md',
          dest: ''
        },
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: '/zbsplayer/'
})
