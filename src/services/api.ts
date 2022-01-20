import axios from 'axios';
import Constants from 'expo-constants';

import { store } from '../store/store';
import { authActions } from '../store/reducers/auth';

const api = axios.create({
  baseURL: Constants.manifest.extra.apiUrl,
  headers: {
    app_version: Constants.manifest.version,
  },
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { token } = await store
          .dispatch(authActions.fetchRefreshToken())
          .unwrap();

        return api({
          ...originalRequest,
          headers: {
            ...originalRequest,
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        store.dispatch(authActions.logout());
        return Promise.reject(error);
      }
    }
    store.dispatch(authActions.logout());
    return Promise.reject(error);
  }
);

export const fetcher = url =>
  api.get(url).then(({ data }) => (data.result ? data.result : data));

export default api;
