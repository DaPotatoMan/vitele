import { resolve } from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
   resolve: {
      alias: {
         '~': resolve(__dirname, 'src'),
         '@assets': resolve(__dirname, 'src/assets'),
         '@styles': resolve(__dirname, 'src/assets/styles')
      }
   },

   plugins: [Vue(), ViteComponents(), WindiCSS()],

   build: {
      lib: {
         name: 'VueNextMasonry',
         fileName: 'lib',
         entry: resolve(__dirname, 'src/lib/main.ts')
      },

      rollupOptions: {
         external: ['vue'],
         output: {
            globals: {
               vue: 'Vue'
            }
         }
      }
   }
});
