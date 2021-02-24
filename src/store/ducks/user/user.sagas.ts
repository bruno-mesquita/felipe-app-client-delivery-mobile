import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import { RegisterUserRequestAction, REGISTER_USER_REQUEST } from './user.types';
import {
  registerUserRequestFailure,
  registerUserRequestSuccess,
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

export default all([takeLatest(REGISTER_USER_REQUEST, registerRequest)]);
