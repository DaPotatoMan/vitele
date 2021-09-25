import { resolve } from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
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

   plugins: [
      Vue(),
      Pages({
         routeBlockLang: 'yaml'
      }),
      Layouts({
         layoutsDir: 'src/components/layouts'
      }),
      Components({
         dts: './types/components.d.ts'
      }),
      WindiCSS()
   ]
});
