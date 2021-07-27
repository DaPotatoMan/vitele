import { resolve } from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import ViteComponents from 'vite-plugin-components';
import WindiCSS from 'vite-plugin-windicss';

const resolveSrc = (path: string) => `src/render/${path}`;

export default defineConfig({
   resolve: {
      alias: {
         '~': resolve(__dirname, 'src/render/'),
         '@assets': resolve(__dirname, 'src/render/assets'),
         '@styles': resolve(__dirname, 'src/render/assets/styles')
      }
   },

   plugins: [
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
