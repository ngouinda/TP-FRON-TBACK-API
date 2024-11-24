import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const navigate = useNavigate(); // Pour gérer la redirection
  const isLoggedIn = !!localStorage.getItem('accessToken'); // Vérifie si l'utilisateur est connecté

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // Supprime le token
    navigate('/'); // Redirige vers la page de connexion
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold flex-1 text-center">
          Tree Learning
        </div>

        <div className="hidden md:flex space-x-4" >
            {/* IDENTIFIANTS  */}
            {/* <Link to="">
                        ID: alan@alan.fr 
                </Link>
                <Link to="">
                      MDP: pass_1234
                </Link> */}
                {/* _____________________________________________ */}
          {/* Afficher le lien "Modules" uniquement si l'utilisateur est connecté */}
          {isLoggedIn && (
            <Link to="/module" className="text-white hover:text-gray-300">
              Modules
            </Link>
          )}
          {/* Lien de déconnexion */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-300"
            >
              Déconnexion
            </button>
          )}
          {/* Lien vers la connexion si non connecté */}
          {!isLoggedIn && (
            <Link to="/" className="text-white hover:text-gray-300">
              Connexion
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
