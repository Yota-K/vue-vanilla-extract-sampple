import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// vite.config.js
export default defineConfig({
  plugins: [
    vue(), 
    vanillaExtractPlugin()
  ],
});
