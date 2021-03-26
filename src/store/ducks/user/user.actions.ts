import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_REQUEST_FAILURE,
  REGISTER_USER_REQUEST_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_REQUEST_FAILURE,
  UPDATE_PROFILE_REQUEST_SUCCESS,
  CHANGE_USER_PASSWORD_REQUEST,
  CHANGE_USER_PASSWORD_REQUEST_FAILURE,
  CHANGE_USER_PASSWORD_REQUEST_SUCCESS,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_REQUEST_SUCCESS,
  UPDATE_AVATAR_REQUEST_FAILURE,
  SET_ADDRESS_ACTIVE,
  UserActionTypes,
  RegisterUser,
  ProfileUpdate,
} from './user.types';

export const registerUserRequest = (user: RegisterUser): UserActionTypes => ({
  type: REGISTER_USER_REQUEST,
  payload: { user },
});

export const registerUserRequestSuccess = (): UserActionTypes => ({
  type: REGISTER_USER_REQUEST_SUCCESS,
});

export const registerUserRequestFailure = (
  message: string,
): UserActionTypes => ({
  type: REGISTER_USER_REQUEST_FAILURE,
  payload: { message },
});

export const updateProfileRequest = (
  profile: ProfileUpdate,
): UserActionTypes => ({
  type: UPDATE_PROFILE_REQUEST,
  payload: { profile },
});

export const updateProfileRequestSuccess = (
  profile: ProfileUpdate,
): UserActionTypes => ({
  type: UPDATE_PROFILE_REQUEST_SUCCESS,
  payload: { profile },
});

export const updateProfileRequestFailure = (
  message: string,
): UserActionTypes => ({
  type: UPDATE_PROFILE_REQUEST_FAILURE,
  payload: { message },
});

export const changeUserPasswordRequest = (values: any): UserActionTypes => ({
  type: CHANGE_USER_PASSWORD_REQUEST,
  payload: { ...values },
});

export const changeUserPasswordRequestSuccess = (): UserActionTypes => ({
  type: CHANGE_USER_PASSWORD_REQUEST_SUCCESS,
});

export const changeUserPasswordRequestFailure = (): UserActionTypes => ({
  type: CHANGE_USER_PASSWORD_REQUEST_FAILURE,
});

export const updateAvatarRequest = (
  encoded: string,
  name: string,
): UserActionTypes => ({
  type: UPDATE_AVATAR_REQUEST,
  payload: { encoded, name },
});

export const updateAvatarRequestSuccess = (
  encoded: string,
  name: string,
): UserActionTypes => ({
  type: UPDATE_AVATAR_REQUEST_SUCCESS,
  payload: { encoded, name },
});

export const updateAvatarRequestFailure = (
  message: string,
): UserActionTypes => ({
  type: UPDATE_AVATAR_REQUEST_FAILURE,
  payload: { message },
});

export const setAddressActive = (
  addressClientId: string | null,
): UserActionTypes => ({
  type: SET_ADDRESS_ACTIVE,
  payload: { addressClientId },
});
