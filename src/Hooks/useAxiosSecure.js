import axios from 'axios';
import { useEffect } from 'react';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ServerUrl,
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      res => {
        return res;
      },
      err => {
        return Promise.reject(err);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
