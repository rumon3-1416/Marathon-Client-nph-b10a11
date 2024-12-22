import React from 'react';

import { AuthContext } from '../Contexts/AuthContext';
import { ContextValue } from '../Contexts/ContextValue';

const AuthProvider = ({ children }) => {
  const value = ContextValue();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
