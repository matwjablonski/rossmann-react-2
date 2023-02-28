import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isLoggedIn: boolean;
}

const ProtectedRoute: FC<PropsWithChildren<ProtectedRouteProps>> = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace/>
  }

  return <>{children}</>
}

export default ProtectedRoute;
