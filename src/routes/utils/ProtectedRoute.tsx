import type { JSX } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes } from '../config';

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const location = useLocation();
  const isAuthenticated = true;

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={AppRoutes.LOGIN} replace state={{ from: location }} />
  );
}
