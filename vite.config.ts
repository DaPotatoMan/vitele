import { resolve } from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
   resolve: {
      alias: {
         '~': resolve(__dirname, 'src'),
         '@assets': resolve(__dirname, 'src/assets'),
         '@styles': resolve(__dirname, 'src/assets/styles')
      }
   },

   server: {
      fs: {
         strict: true
      }
   },

   plugins: [
      Vue(),
      Pages({
         routeBlockLang: 'yaml'
      }),
      Layouts({
         layoutsDir: 'src/components/layouts'
      }),

      AutoImport({
         imports: ['vue', 'vue-router', '@vueuse/head', '@vueuse/core'],
         dts: './types/auto-imports.d.ts'
      }),

      Components({
         dts: './types/components.d.ts'
      }),
      WindiCSS()
   ],

   optimizeDeps: {
      include: ['vue', 'vue-router', '@vueuse/head', '@vueuse/core'],
      exclude: ['vue-demi']
   }
});
