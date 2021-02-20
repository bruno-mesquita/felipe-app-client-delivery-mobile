import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import {
  deleteOrderRequestSuccess,
  openOrderRequestSuccess,
  deleteOrderRequestFailure,
  openOrderRequestFailure,
} from './cart.actions';

import {
  OpenOrderRequestAction,
  DeleteOrderRequestAction,
  CART_OPEN_ORDER_REQUEST,
  CART_DELETE_ORDER_REQUEST,
} from './cart.types';

export function* openOrderRequest({ payload }: OpenOrderRequestAction) {
  try {
    const { establishmentId } = payload;

    const { data } = yield call(api.post, '/orders', payload);

    yield put(openOrderRequestSuccess(data, establishmentId));
  } catch (err) {
    yield put(openOrderRequestFailure(err.message));
  }
}

export function* deleteOrderRequest({ payload }: DeleteOrderRequestAction) {
  try {
    const { orderId } = payload;

    yield call(api.delete, `/orders/${orderId}`);

    yield put(deleteOrderRequestSuccess());
  } catch (err) {
    yield put(deleteOrderRequestFailure(err.message));
  }
}

export default all([
  takeLatest(CART_OPEN_ORDER_REQUEST, openOrderRequest),
  takeLatest(CART_DELETE_ORDER_REQUEST, deleteOrderRequest),
]);
