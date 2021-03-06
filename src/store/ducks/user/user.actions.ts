import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_REQUEST_FAILURE,
  REGISTER_USER_REQUEST_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_REQUEST_FAILURE,
  UPDATE_PROFILE_REQUEST_SUCCESS,
  UserActionTypes,
  RegisterUser,
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

export const updateProfileRequest = (profile: any): UserActionTypes => ({
  type: UPDATE_PROFILE_REQUEST,
  payload: { profile },
});

export const updateProfileRequestSuccess = (profile: any): UserActionTypes => ({
  type: UPDATE_PROFILE_REQUEST_SUCCESS,
  payload: { profile },
});

export const updateProfileRequestFailure = (): UserActionTypes => ({
  type: UPDATE_PROFILE_REQUEST_FAILURE,
});
