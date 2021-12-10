import axios from 'axios';
import Constants from 'expo-constants';

import { store } from '../store/store';
import {
  logoutAction,
  refreshTokenAction,
} from '../store/ducks/auth/auth.actions';

// const baseURL = 'https://api.flippdelivery.com.br/api/app';
const baseURL = 'http://192.168.15.24:3030/api/app';

const api = axios.create({
  baseURL: baseURL,
  headers: {
    api_version: Constants.manifest.version,
  },
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const { refreshToken } = (store.getState() as any).auth;

      if (!refreshToken) {
        store.dispatch(logoutAction());
        return Promise.reject(error);
      }

      try {
        const response = await fetch(baseURL + '/auth/refresh', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refreshToken }),
        });

        const { result } = await response.json();

        const { accessToken, refreshToken: newRefreshToken } = result;

        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        store.dispatch(refreshTokenAction(accessToken, newRefreshToken));

        return api({
          ...originalRequest,
          headers: {
            ...originalRequest,
            Authorization: `Bearer ${accessToken}`,
          },
        });
      } catch (err) {
        store.dispatch(logoutAction());
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
