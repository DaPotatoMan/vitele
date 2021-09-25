import 'virtual:windi.css';
import '@styles/index.css';

import { createApp } from 'vue';
import App from '~/App.vue';

import components from '~/plugins/components';
import router from '~/plugins/router';

createApp(App).use(components).use(router).mount('#app');
