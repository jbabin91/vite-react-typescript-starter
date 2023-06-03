import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Link, Outlet } from '@tanstack/router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { Toaster } from '@/components/ui/toaster';

export const Layout = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Outlet />
      <Toaster />
      {process.env.NODE_ENV === 'development' && (
        <>
          <ReactQueryDevtools panelPosition="right" position="bottom-right" />
          <TanStackRouterDevtools />
        </>
      )}
    </>
  );
};
