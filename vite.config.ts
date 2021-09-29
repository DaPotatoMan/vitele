import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import WindiCSS from 'vite-plugin-windicss';
import TSPaths from 'vite-tsconfig-paths';

const resolveSrc = (path: string) => `src/renderer/${path}`;

export default defineConfig({
   base: './',

   plugins: [
      TSPaths(),
      Vue(),
      AutoImport({
         dts: './types/auto-import.d.ts',
         imports: ['vue', 'vue-router']
      }),
      Pages({
         routeBlockLang: 'yaml',
         pagesDir: resolveSrc('pages')
      }),
      Layouts({
         layoutsDir: resolveSrc('components/layouts')
      }),
      Components({
         dirs: resolveSrc('components'),
         dts: './types/auto-components.d.ts'
      }),
      WindiCSS()
   ],

   optimizeDeps: {
      include: ['vue', 'vue-router'],
      exclude: ['vue-demi']
   }
});
