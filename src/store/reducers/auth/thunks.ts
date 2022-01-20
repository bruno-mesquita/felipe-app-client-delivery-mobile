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
  const { data } = await api.post<
    IFetchLoginReturned | { result: IFetchLoginReturned }
  >('/auth/login', payload);

  api.defaults.headers.common.Authorization = `Bearer ${
    data.result ? data.result.token : data.token
  }`;

  return data.result ? data.result : data;
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
