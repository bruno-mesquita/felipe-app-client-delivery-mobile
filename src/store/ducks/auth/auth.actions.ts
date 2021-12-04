import { AuthActionTypes } from './auth.types';

export const loginAction = (token: string, refreshToken: string): AuthActionTypes => ({
  type: '@auth/LOGIN',
  payload: { token, refreshToken },
});

export const logoutAction = (): AuthActionTypes => ({
  type: '@auth/LOGOUT',
});

export const refreshTokenAction = (accessToken: string, refreshToken: string): AuthActionTypes => ({
  type: '@auth/REFRESH_TOKEN',
  payload: { refreshToken, accessToken },
});
