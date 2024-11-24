import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importer useNavigate
import Input from '../atoms/Input';
import Bouton from '../atoms/Bouton';
import Checkbox from '../atoms/Checkbox';
import { useLoginMutation } from '../../../../api/endpoints/auth';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [login] = useLoginMutation(); // Mutation pour gérer l'authentification
  const navigate = useNavigate(); // Hook de navigation

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation basique
    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setError(null);

    try {
      // Appel de la mutation de connexion
      const response = await login({ email, password }).unwrap();
      console.log('Connexion réussie:', response);

      // Stocker le token dans localStorage
      localStorage.setItem('accessToken', response.token);

      // Rediriger vers la page des modules après une connexion réussie
      navigate('/module');  // Cette ligne redirige l'utilisateur vers la page des modules
    } catch (err: any) {
      console.error('Erreur de connexion:', err);
      setError(err.data?.message || 'Une erreur est survenue');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-2xl text-center font-semibold mb-2">Se connecter</h1>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        label="Mot de passe"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="my-4">
        <Checkbox label="Rester connecté" />
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <Bouton type="submit" label="Se connecter" />
      <p className="mt-4 text-sm">
        Mot de passe oublié ? <a href="#" className="text-blue-500 underline">Réinitialiser</a>
      </p>
    </form>
  );
};

export default LoginForm;
