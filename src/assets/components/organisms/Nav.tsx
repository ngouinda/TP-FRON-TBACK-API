import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  // Vérifier si l'utilisateur est connecté en cherchant le token dans le localStorage
  const isLoggedIn = !!localStorage.getItem('accessToken'); // Vérifier la présence du token

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-lg font-bold flex-1 text-center">
            Tree Learning
          </div>

          <div className="hidden md:flex space-x-4">
            {/* Afficher le lien "Modules" uniquement si l'utilisateur est connecté */}
            {isLoggedIn && (
              <Link to="/module" className="text-white hover:text-gray-300">
                Modules
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
