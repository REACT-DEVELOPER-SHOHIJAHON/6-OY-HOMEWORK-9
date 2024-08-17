import React from 'react';
import { useRoutes } from 'react-router-dom';


import Home from './components/home/Home';
import Recipe from './components/recipe/Recipe';

const App = () => {
  
  const routes = [
    {
      path: '/',
      element: <Home />, 
    },
    {
      path: '/recipe/:id',
      element: <Recipe />, 
    },
  ];

  const routing = useRoutes(routes);

  return routing;
};

export default App;
