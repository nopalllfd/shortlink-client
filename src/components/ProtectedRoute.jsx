import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

function ProtectedRoute() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" replace />;
    }
  }, [isAuthenticated]);
  return <Outlet />;
}

export default ProtectedRoute;
