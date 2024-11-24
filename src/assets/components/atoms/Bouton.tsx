import React from 'react';

interface BoutonProps {
  label: string;
  onClick: () => void;
  className?: string; 
}

const Bouton: React.FC<BoutonProps> = () => {
  return (
    <button
    type="submit"
    className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  >
    Se connecter
  </button>
  );
};

export default Bouton;
