import { takeLatest, put, all } from 'redux-saga/effects';
import { DefaultRootState } from 'react-redux';

import api from '../../../services/api';
import { logoutAction } from './auth.actions';

export function* setToken({ payload }: { payload: DefaultRootState }) {
  if (!payload) return;

  const { token, refreshToken } = payload.auth;

  if (token && refreshToken) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    yield put(logoutAction());
  }
}

export default all([takeLatest('persist/REHYDRATE' as any, setToken)]);
