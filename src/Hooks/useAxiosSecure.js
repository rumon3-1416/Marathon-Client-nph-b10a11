import axios from 'axios';
import { useEffect } from 'react';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ServerUrl,
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      res => {
        return res;
      },
      err => {
        return Promise.reject(err);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
