import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import AuthProvider from './Providers/AuthProvider';
import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <ScrollRestoration />
      <Navbar />
      <div className="h-24"></div>

      <Outlet />

      <Footer />
    </AuthProvider>
  );
}

export default App;
