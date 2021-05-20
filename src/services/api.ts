import axios, { AxiosInstance } from 'axios';
import Constants from 'expo-constants';

import { store } from '../store/store';

import {
  requestRefreshTokenSuccess,
  logout,
} from '../store/ducks/auth/auth.actions';

let api: AxiosInstance;

const createApi = () => {
  api = axios.create({
    baseURL: 'http://192.168.1.107:3030/api/app',
    headers: {
      api_version: Constants.manifest.version,
    },
  });

  api.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const { refreshToken } = (store.getState() as any).auth;

        if (!refreshToken) store.dispatch(logout());

        const { data } = await api.post('/auth/refresh', {
          token: refreshToken,
        });

        const { accessToken, refreshToken: newRefreshToken } = data.result;

        api.defaults.headers.Authorization = `Bearer ${accessToken}`;

        store.dispatch(
          requestRefreshTokenSuccess(accessToken, newRefreshToken),
        );

        return axios(originalRequest);
      }
      return Promise.reject(error);
    },
  );
};

const getApi = () => {
  if (!api) createApi();

  return api;
};

export { createApi, getApi };
