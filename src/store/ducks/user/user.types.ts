import { AUTH_LOGOUT, RequestLoginSuccessAction } from '../auth/auth.types';

export interface LogoutAction {
  type: typeof AUTH_LOGOUT;
}

export type UserActionTypes = LogoutAction | RequestLoginSuccessAction;

export interface UserState {
  id: string;
  profile: {
    name: string | null;
    email: string | null;
    adresses: any | null;
  };
  addressActive: any | null;
}
