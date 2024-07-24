import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      layouts: '/src/layouts',
      views: '/src/views',
      components: '/src/components',
      // src: "/src",
      assets: '/src/assets',
      styles: '/src/styles',
      hooks: '/src/hooks',
      store: '/src/store',
      api: '/src/api',
      guards: '/src/guards',
      routsConfig: '/src/routsConfig',
      helpers: '/src/helpers',
    },
  },

  build: {
    sourcemap: true,

    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },

  base: '/mv',
})
