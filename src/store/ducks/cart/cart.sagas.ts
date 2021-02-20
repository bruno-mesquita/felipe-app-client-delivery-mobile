import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import {
  deleteOrderRequestSuccess,
  openOrderRequestSuccess,
  deleteOrderRequestFailure,
  openOrderRequestFailure,
} from './cart.actions';

export function* openOrderRequest({ payload }) {
  try {
    const { establishmentId } = payload;

    const { data } = yield call(api.post, '/orders', payload);

    yield put(openOrderRequestSuccess(data, establishmentId));
  } catch (err) {
    yield put(openOrderRequestFailure(err.message));
  }
}

export function* deleteOrderRequest({ payload }) {
  try {
    const { establishmentId } = payload;

    yield call(api.delete, `/orders/${establishmentId}`);

    yield put(deleteOrderRequestSuccess());
  } catch (err) {
    yield put(deleteOrderRequestFailure(err.message));
  }
}

export default all([
  takeLatest('@cart/OPEN_ORDER_REQUEST' as any, openOrderRequest),
  takeLatest('@cart/DELETE_ORDER_REQUEST' as any, deleteOrderRequest),
]);
