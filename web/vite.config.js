import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/styles.scss";
          @import "@/assets/styles/variables.scss";
        `,
      },
    },
  },
})
