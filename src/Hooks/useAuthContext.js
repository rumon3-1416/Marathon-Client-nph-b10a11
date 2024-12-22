import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
