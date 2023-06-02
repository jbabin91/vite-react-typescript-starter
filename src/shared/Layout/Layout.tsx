import { Link, Outlet } from '@tanstack/router';

export const Layout = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Outlet />
    </>
  );
};
