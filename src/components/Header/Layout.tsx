import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import { useEffect } from 'react';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('실행');
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
