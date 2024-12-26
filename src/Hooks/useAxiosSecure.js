import axios from 'axios';
import { useEffect } from 'react';
import { useAuthContext } from './useAuthContext';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ServerUrl,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuthContext();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      res => {
        return res;
      },
      err => {
        if (err.status === 401 || err.status === 403) {
          signOutUser();
        }

        return Promise.reject(err);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, [signOutUser]);

  return axiosInstance;
};

export default useAxiosSecure;
