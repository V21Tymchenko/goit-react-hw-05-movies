import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export function AppBar() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
