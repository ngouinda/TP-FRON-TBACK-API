import React from 'react';
import { useGetModulesQuery } from '../../../../api/endpoints/modules';
import { useNavigate } from 'react-router-dom';

interface Module {
  id: number;
  title: string;
  description: string;
  creation_date: string;
}

const Modules: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetModulesQuery();

  // Vérifier si l'utilisateur est connecté en vérifiant la présence d'un token dans localStorage
  const isAuthenticated = localStorage.getItem('accessToken') !== null;

  // Si l'utilisateur n'est pas connecté, le rediriger vers la page de connexion
  if (!isAuthenticated) {
    navigate('/login');
    return null; // Empêche l'affichage de ce composant tant que l'utilisateur n'est pas connecté
  }

  if (isLoading) return <p>Loading...</p>;

  const modules: Module[] = Array.isArray(data) ? data : data?.modules || [];

  if (modules.length === 0) return <p>No modules available</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Modules</h1>
      <div className="mt-6 space-y-6">
        {modules.map((module) => (
          <div
            key={module.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
              {module.title}
            </h2>
            <p className="mt-2 text-gray-600">{module.description}</p>
            <p className="mt-2 text-sm text-gray-500">Created on: {new Date(module.creation_date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;
