import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import ViteComponents from 'vite-plugin-components';
import WindiCSS from 'vite-plugin-windicss';
import TSPaths from 'vite-tsconfig-paths';

const resolveSrc = (path: string) => `src/renderer/${path}`;

export default defineConfig({
   base: './',

   plugins: [
      TSPaths(),
      Vue(),
      Pages({
         routeBlockLang: 'yaml',
         pagesDir: resolveSrc('pages')
      }),
      Layouts({
         layoutsDir: resolveSrc('components/layouts')
      }),
      ViteComponents({
         dirs: resolveSrc('components')
      }),
      WindiCSS()
   ]
});
