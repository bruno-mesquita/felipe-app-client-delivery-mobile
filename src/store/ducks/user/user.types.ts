import { AUTH_LOGOUT, RequestLoginSuccessAction } from '../auth/auth.types';

export const REGISTER_USER_REQUEST = '@user/REGISTER_USER_REQUEST';
export const REGISTER_USER_REQUEST_SUCCESS =
  '@user/REGISTER_USER_REQUEST_SUCCESS';
export const REGISTER_USER_REQUEST_FAILURE =
  '@user/REGISTER_USER_REQUEST_FAILURE';

export interface RegisterUser {
  name: string;
  email: string;
  cellphone: string;
  cpf: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterUserRequestAction {
  type: typeof REGISTER_USER_REQUEST;
  payload: { user: RegisterUser };
}

export interface RegisterUserRequestSuccessAction {
  type: typeof REGISTER_USER_REQUEST_SUCCESS;
}

export interface RegisterUserRequestFailureAction {
  type: typeof REGISTER_USER_REQUEST_FAILURE;
  payload: { message: string };
}
export interface LogoutAction {
  type: typeof AUTH_LOGOUT;
}

export type UserActionTypes =
  | LogoutAction
  | RequestLoginSuccessAction
  | RegisterUserRequestAction
  | RegisterUserRequestSuccessAction
  | RegisterUserRequestFailureAction;

export interface UserState {
  id: string;
  profile: {
    name: string | null;
    email: string | null;
    adresses: any | null;
  };
  addressActive: any | null;
}
