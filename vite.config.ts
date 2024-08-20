import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${path.resolve(__dirname, 'src/assets/styles/helpers')}";`,
      }
    }
  },
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({
      include: path.resolve(__dirname, 'src/assets/icons/**/*.svg'),
    }),
  ],
})
