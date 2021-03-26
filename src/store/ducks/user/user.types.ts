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

export const ADD_USER_ADDRESS = '@user/ADD_USER_ADDRESS';
export const UPDATE_USER_ADDRESS = '@user/UPDATE_USER_ADDRESS';
export const REMOVE_USER_ADDRESS = '@user/REMOVE_USER_ADDRESS';

export const UPDATE_AVATAR_REQUEST = '@user/UPDATE_AVATAR_REQUEST';
export const UPDATE_AVATAR_REQUEST_SUCCESS =
  '@user/UPDATE_AVATAR_REQUEST_SUCCESS';
export const UPDATE_AVATAR_REQUEST_FAILURE =
  '@user/UPDATE_AVATAR_REQUEST_FAILURE';

export const SET_ADDRESS_ACTIVE = '@user/SET_ADDRESS_ACTIVE';

export interface ProfileUpdate {
  name: string;
  email: string;
  cellphone: string;
}

export interface RegisterUser {
  name: string;
  email: string;
  cellphone: string;
  cpf: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
}

export interface SetAddressActive {
  type: typeof SET_ADDRESS_ACTIVE;
  payload: { addressClientId: string | null };
}

export interface UpdateAvatarRequest {
  type: typeof UPDATE_AVATAR_REQUEST;
  payload: { encoded: string; name: string };
}

export interface UpdateAvatarRequestSuccess {
  type: typeof UPDATE_AVATAR_REQUEST_SUCCESS;
  payload: { encoded: string; name: string };
}

export interface UpdateAvatarRequestFailure {
  type: typeof UPDATE_AVATAR_REQUEST_FAILURE;
  payload: { message: string };
}

export interface RemoveUserAddress {
  type: typeof REMOVE_USER_ADDRESS;
  payload: { id: string };
}

export interface UpdateUserAddress {
  type: typeof UPDATE_USER_ADDRESS;
  payload: { values: any };
}

export interface AddUserAddress {
  type: typeof ADD_USER_ADDRESS;
  payload: { address: any };
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
  payload: { profile: ProfileUpdate };
}

export interface UpdateProfileRequestSuccess {
  type: typeof UPDATE_PROFILE_REQUEST_SUCCESS;
  payload: { profile: ProfileUpdate };
}

export interface UpdateProfileRequestFailure {
  type: typeof UPDATE_PROFILE_REQUEST_FAILURE;
  payload: { message: string };
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
  | ChangeUserPasswordRequestFailure
  | AddUserAddress
  | UpdateUserAddress
  | RemoveUserAddress
  | UpdateAvatarRequest
  | UpdateAvatarRequestSuccess
  | UpdateAvatarRequestFailure
  | SetAddressActive;

export interface Address {
  clientAddressId: string;
  addressId: string;
  nickname: string;
  city: string;
  street: string;
  number: number;
  neighborhood: string;
  cep: string;
}

export interface UserState {
  id: string;
  profile: {
    avatar: string | null;
    email: string | null;
    name: string | null;
    cpf: string | null;
    phone: string | null;
    adresses: Address[];
  };
  addressActive: string | null;
  error: string | null;
}
