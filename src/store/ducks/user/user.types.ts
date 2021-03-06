import { AUTH_LOGOUT, RequestLoginSuccessAction } from '../auth/auth.types';

export const REGISTER_USER_REQUEST = '@user/REGISTER_USER_REQUEST';
export const REGISTER_USER_REQUEST_SUCCESS =
  '@user/REGISTER_USER_REQUEST_SUCCESS';
export const REGISTER_USER_REQUEST_FAILURE =
  '@user/REGISTER_USER_REQUEST_FAILURE';
export const UPDATE_PROFILE_REQUEST = '@user/UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_REQUEST_SUCCESS =
  '@user/UPDATE_PROFILE_REQUEST_SUCCESS';
export const UPDATE_PROFILE_REQUEST_FAILURE =
  '@user/UPDATE_PROFILE_REQUEST_FAILURE';

export const CHANGE_USER_PASSWORD_REQUEST =
  '@user/CHANGE_USER_PASSWORD_REQUEST';
export const CHANGE_USER_PASSWORD_REQUEST_SUCCESS =
  '@user/CHANGE_USER_PASSWORD_REQUEST_SUCCESS';
export const CHANGE_USER_PASSWORD_REQUEST_FAILURE =
  '@user/CHANGE_USER_PASSWORD_REQUEST_FAILURE';

export interface RegisterUser {
  name: string;
  email: string;
  cellphone: string;
  cpf: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
}

export interface ChangeUserPasswordRequest {
  type: typeof CHANGE_USER_PASSWORD_REQUEST;
  payload: {
    currentPassoword: string;
    newPassword: string;
    confirmNewPassword: string;
  };
}

export interface ChangeUserPasswordRequestSuccess {
  type: typeof CHANGE_USER_PASSWORD_REQUEST_SUCCESS;
}

export interface ChangeUserPasswordRequestFailure {
  type: typeof CHANGE_USER_PASSWORD_REQUEST_FAILURE;
}

export interface UpdateProfileRequest {
  type: typeof UPDATE_PROFILE_REQUEST;
  payload: { profile: any };
}

export interface UpdateProfileRequestSuccess {
  type: typeof UPDATE_PROFILE_REQUEST_SUCCESS;
  payload: { profile: any };
}

export interface UpdateProfileRequestFailure {
  type: typeof UPDATE_PROFILE_REQUEST_FAILURE;
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
  | RegisterUserRequestFailureAction
  | UpdateProfileRequest
  | UpdateProfileRequestSuccess
  | UpdateProfileRequestFailure
  | ChangeUserPasswordRequest
  | ChangeUserPasswordRequestSuccess
  | ChangeUserPasswordRequestFailure;

export interface UserState {
  id: string;
  profile: {
    avatar: string | null;
    email: string | null;
    name: string | null;
    cpf: string | null;
    phone: string | null;
    adresses: any[];
  };
  addressActive: any | null;
}
