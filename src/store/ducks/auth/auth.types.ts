export const AUTH_LOGIN = '@auth/LOGIN';
export const AUTH_LOGOUT = '@auth/LOGOUT';
export const AUTH_REFRESH_TOKEN = '@auth/REFRESH_TOKEN';

export interface LoginAction {
  type: typeof AUTH_LOGIN;
  payload: { token: string; refreshToken: string };
}

export interface LogoutAction {
  type: typeof AUTH_LOGOUT;
}

export interface RequestRefreshTokenAction {
  type: typeof AUTH_REFRESH_TOKEN;
  payload: { refreshToken: string; accessToken: string };
}

export type AuthActionTypes = LoginAction | RequestRefreshTokenAction | LogoutAction;

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  signed: boolean;
}
