import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '@services/api';

import type {
  IFetchLoginPlayload,
  IFetchLoginReturned,
  IFetchRefreshTokenReturned,
} from './types';

export const fetchLogin = createAsyncThunk<
  IFetchLoginReturned,
  IFetchLoginPlayload
>('auth/login', async payload => {
  try {
    const { data } = await api.post<{ result: IFetchLoginReturned }>(
      '/auth/login',
      payload
    );

    api.defaults.headers.common.Authorization = `Bearer ${data.result.token}`;

    return data.result;
  } catch (err) {
    throw new Error(err.response.data.message || '');
  }
});

export const fetchRefreshToken = createAsyncThunk<IFetchRefreshTokenReturned>(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { refreshToken } = (thunkAPI.getState() as any).auth;

    const { data } = await api.post<IFetchRefreshTokenReturned>(
      '/auth/refresh-token',
      {
        token: refreshToken,
      }
    );

    api.defaults.headers.common.Authorization = `Bearer ${data.token}`;

    return data;
  }
);
