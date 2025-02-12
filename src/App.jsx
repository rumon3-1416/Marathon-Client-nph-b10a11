import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useAuthContext } from './Hooks/useAuthContext';
import Loading from './components/Loading/Loading';

function App() {
  const { loading } = useAuthContext();
  const { pathname } = useLocation();

  return !loading ? (
    <>
      <ScrollRestoration />
      <Navbar />
      <div className="h-10"></div>

      <Outlet />

      {pathname !== '/signin' && pathname !== '/signup' && <Footer />}
    </>
  ) : (
    <Loading />
  );
}

export default App;
