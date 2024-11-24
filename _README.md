# Tree Learning

## Description

Tree Learning est une application web qui permet aux utilisateurs de se connecter et de consulter différents modules pédagogiques. Ce projet utilise **React** et **Redux Toolkit Query (RTK Query)** pour gérer les interactions avec une API REST. L'interface est conçue avec **Tailwind CSS** pour une expérience utilisateur moderne et responsive.

---

## Fonctionnalités

- **Connexion sécurisée :** Les utilisateurs peuvent se connecter à l'aide de leurs identifiants, avec validation côté client et serveur.
- **Affichage des modules :** Une fois connectés, les utilisateurs peuvent voir les modules disponibles.
- **Navigation conditionnelle :** L'accès aux modules est protégé et nécessite une authentification.
- **Déconnexion :** Les utilisateurs peuvent se déconnecter et être redirigés vers la page de connexion.

- ** JWT: m'a permis de transmettre des données de mainiere securise sous forme de token je l'ai donc utlisé pour identifier les utilisateurs connectes, proteger les enddpoints de l'API en exigeant un token valide. 

Lorsqu'un utilisateur se connecte, l'API renvoie un token JWT. Ce token est stocké dans le localStorage pour être utilisé dans les requêtes futures.

``` js
const response = await login({ email, password }).unwrap();
localStorage.setItem('accessToken', response.token);

```
---



### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn
- Une API REST opérationnelle

### Techcnologies utilisées

- React avec TypeScript
- Redux Toolkit Query pour la gestion des requêtes API
- React Router DOM pour la navigation
- Tailwind CSS pour le design
- Vite pour le développement

## Lien du projet

https://github.com/ngouinda/TP-FRON-TBACK-API