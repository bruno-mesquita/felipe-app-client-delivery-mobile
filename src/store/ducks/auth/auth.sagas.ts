import { takeLatest, call, put, all } from 'redux-saga/effects';
import { DefaultRootState } from 'react-redux';

import api from '../../../services/api';
import { requestLoginFailure, requestLoginSuccess } from './auth.actions';
import { RequestLoginAction } from './auth.types';

export function* signIn({ payload }: RequestLoginAction) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, '/login', {
      email,
      password,
    });

    const { token, user } = data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(requestLoginSuccess(user, token));
  } catch (err) {
    yield put(requestLoginFailure(err.message));
  }
}

export function setToken({ payload }: { payload: DefaultRootState }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE' as any, setToken),
  takeLatest('@auth/REQUEST_LOGIN' as any, signIn),
]);
