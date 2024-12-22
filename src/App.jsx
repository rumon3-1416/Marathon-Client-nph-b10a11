import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import AuthProvider from './Providers/AuthProvider';
import './styles/App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <AuthProvider>
      <ScrollRestoration />
      <Navbar />

      <Outlet />
    </AuthProvider>
  );
}

export default App;
