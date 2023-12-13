/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import eslint from 'vite-plugin-eslint'; // eslint

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: true,
      eslintrc: {
        enabled: true, // <-- this
      },
    }),
    eslint(),
  ],
  root: './src',
  server: {
    port: 8888,
    open: true,
  },
});
