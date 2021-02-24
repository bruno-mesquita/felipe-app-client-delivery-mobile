import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_REQUEST_FAILURE,
  REGISTER_USER_REQUEST_SUCCESS,
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
