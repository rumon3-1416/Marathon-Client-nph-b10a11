import React from 'react';

import { AuthContext } from '../Contexts/AuthContext';
import ContextValue from '../Contexts/ContextValue';

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={ContextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
