import { defineConfig } from 'windicss/helpers';

export default defineConfig({
   darkMode: false,

   theme: {
      extend: {
         colors: {
            accent: '#536aff'
         },

         textColor: {
            default: '#202020',
            'default-light': '#454545',

            inverse: '#fff'
         },

         backgroundColor: {
            default: '#f8f6f5',
            'default-elevated': '#fff',
            inverse: '#000'
         }
      }
   }
});
