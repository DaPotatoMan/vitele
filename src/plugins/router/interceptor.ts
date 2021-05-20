import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

function routeHandler(
   to: RouteLocationNormalized,
   from: RouteLocationNormalized,
   next: NavigationGuardNext
): void {
   const { requiresAuth } = to.meta;
   next();
}

export default routeHandler;
