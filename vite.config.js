import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: true,
    //port: 80,
    proxy: {
      '/api': {
        target: 'http://localhost:8083',
        //target: 'http://192.168.188.21:8083', //Fritzbox
        //target: 'http://192.168.178.48:8083', //Marcel
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [vue()],
})
