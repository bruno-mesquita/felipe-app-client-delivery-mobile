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
  REMOVE_USER_ADDRESS,
  ADD_USER_ADDRESS,
  UPDATE_USER_ADDRESS,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_REQUEST_SUCCESS,
  UPDATE_AVATAR_REQUEST_FAILURE,
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

export const addUserAddress = (address: any): UserActionTypes => ({
  type: ADD_USER_ADDRESS,
  payload: { address },
});

export const removeUserAddress = (id: string): UserActionTypes => ({
  type: REMOVE_USER_ADDRESS,
  payload: { id },
});

export const updateUserAddress = (values: any): UserActionTypes => ({
  type: UPDATE_USER_ADDRESS,
  payload: { values },
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
