import { createRouter, createWebHashHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import inteceptRoutes from './interceptor';

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
   routes,
   history: createWebHashHistory(),
});

router.beforeEach(inteceptRoutes);

export default router;
