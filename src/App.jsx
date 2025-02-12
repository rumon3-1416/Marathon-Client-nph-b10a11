import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useAuthContext } from './Hooks/useAuthContext';
import Loading from './components/Loading/Loading';

function App() {
  const { loading } = useAuthContext();

  return !loading ? (
    <>
      <ScrollRestoration />
      <Navbar />
      <div className="h-10"></div>

      <Outlet />

      <Footer />
    </>
  ) : (
    <Loading />
  );
}

export default App;
