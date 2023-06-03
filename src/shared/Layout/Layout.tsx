import { Link, Outlet } from '@tanstack/router';

import { Toaster } from '@/components/ui/toaster';

export const Layout = () => {
  return (
    <>
      <div>
        <Link
          search={{
            filter: 'testing out a sentence',
          }}
          to="/"
        >
          Home
        </Link>
        <Link to="/about">About</Link>
      </div>
      <Outlet />
      <Toaster />
    </>
  );
};
