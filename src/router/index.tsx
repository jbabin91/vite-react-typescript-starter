import { RootRoute, Route, Router } from '@tanstack/router';

import { About } from '@/pages/About';
import { Home } from '@/pages/Home';
import { Layout } from '@/shared';

const rootRoute = new RootRoute({
  component: Layout,
});

const indexRoute = new Route({
  component: Home,
  getParentRoute: () => rootRoute,
  path: '/',
});

const aboutRoute = new Route({
  component: About,
  getParentRoute: () => rootRoute,
  path: '/about',
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = new Router({ routeTree });

declare module '@tanstack/router' {
  type Register = {
    router: typeof router;
  };
}
