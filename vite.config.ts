import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import json from './configuration.json';


// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    proxy: {
      '/foo': {
        target: json.weather.URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/foo/, '')
      },
      '/api': {
        target: json.baseURL
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
