import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../config/env';
// import {CREATE_CONTACT} from '../constants/routeNames';
// import {navigate} from '../navigations/RootNavigator';

let headers = {};

const axiosInstance = axios.create({
  baseURL: envs.BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
