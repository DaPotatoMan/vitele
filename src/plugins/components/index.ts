import { App } from 'vue';
import { createHead } from '@vueuse/head';

const head = createHead();

export default {
   install(app: App): void {
      app.use(head);
   }
};
