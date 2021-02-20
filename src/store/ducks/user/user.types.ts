export const AUTH_LOGOUT = '@auth/LOGOUT';

export interface LogoutAction {
  type: typeof AUTH_LOGOUT;
}

export type UserActionTypes = LogoutAction;

export interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  adresses: any | null;
  addressActive: any | null;
}
