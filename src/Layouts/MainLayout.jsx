import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

import '../styles/App.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollRestoration />
      {!['signin', 'signup', 'dashboard'].some(path =>
        pathname.includes(path)
      ) && <Navbar />}

      <Outlet />

      {!['signin', 'signup', 'dashboard'].some(path =>
        pathname.includes(path)
      ) && <Footer />}
    </>
  );
};

export default MainLayout;
