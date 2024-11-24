import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  // Vérifier si l'utilisateur est authentifié
  const isAuthenticated = localStorage.getItem('accessToken') !== null;

  // Si l'utilisateur n'est pas connecté, on le redirige vers la page de connexion
  if (!isAuthenticated) {
    return <Navigate to="/LoginTemplate" replace />;
  }

  // Si l'utilisateur est connecté, afficher les composants enfants (la route)
  return <Outlet />;
};

export default PrivateRoute;
