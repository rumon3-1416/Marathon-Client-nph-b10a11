import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useAuthContext } from './Hooks/useAuthContext';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <div className="h-20"></div>

      <Outlet />

      {pathname !== '/signin' && pathname !== '/signup' && <Footer />}
    </>
  );
}

export default App;
