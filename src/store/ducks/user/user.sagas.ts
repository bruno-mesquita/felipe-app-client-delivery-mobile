import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import {
  RegisterUserRequestAction,
  REGISTER_USER_REQUEST,
  UpdateProfileRequest,
  UpdateAvatarRequest,
  UPDATE_PROFILE_REQUEST,
  UPDATE_AVATAR_REQUEST,
} from './user.types';
import {
  registerUserRequestFailure,
  registerUserRequestSuccess,
  updateAvatarRequestSuccess,
  updateAvatarRequestFailure,
  updateProfileRequestFailure,
  updateProfileRequestSuccess,
} from './user.actions';

export function* registerRequest({
  payload: { user },
}: RegisterUserRequestAction) {
  try {
    yield call(api.post, '/users', user);

    yield put(registerUserRequestSuccess());
  } catch (err) {
    yield put(registerUserRequestFailure(err.message));
  }
}

export function* requestUpdateProfile({
  payload: { profile },
}: UpdateProfileRequest) {
  try {
    yield call(api.put, '/clients', profile);

    yield put(updateProfileRequestSuccess(profile));
  } catch (err) {
    console.log(err.response);

    yield put(updateProfileRequestFailure('Erro ao atualizar os dados'));
  }
}

export function* requestUpdateAvatar({
  payload: { encoded, name },
}: UpdateAvatarRequest) {
  try {
    yield call(api.post, '/avatar', { encoded, name });

    yield put(updateAvatarRequestSuccess(encoded, name));
  } catch (err) {
    yield put(updateAvatarRequestFailure('Erro ao alterar foto'));
  }
}

export default all([
  takeLatest(REGISTER_USER_REQUEST, registerRequest),
  takeLatest(UPDATE_PROFILE_REQUEST, requestUpdateProfile),
  takeLatest(UPDATE_AVATAR_REQUEST, requestUpdateAvatar),
]);
