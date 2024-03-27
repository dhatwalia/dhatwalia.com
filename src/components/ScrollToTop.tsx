import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <Outlet />; // Render nested routes
}

export default ScrollToTop;
