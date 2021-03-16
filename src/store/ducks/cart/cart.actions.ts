import {
  CART_ADD_ITEM,
  CART_DELETE_ORDER_REQUEST,
  CART_DELETE_ORDER_REQUEST_FAILURE,
  CART_DELETE_ORDER_REQUEST_SUCCESS,
  CART_OPEN_ORDER_REQUEST,
  CART_OPEN_ORDER_REQUEST_FAILURE,
  CART_OPEN_ORDER_REQUEST_SUCCESS,
  CART_REMOVE_ITEM,
  CART_UPDATE_ITEM,
  CartActionTypes,
  IAddItem,
} from './cart.types';

export const openOrderRequest = (object: any): CartActionTypes => ({
  type: CART_OPEN_ORDER_REQUEST,
  payload: { ...object },
});

export const openOrderRequestSuccess = (
  orderId: string,
  establishmentId: string,
): CartActionTypes => ({
  type: CART_OPEN_ORDER_REQUEST_SUCCESS,
  payload: { orderId, establishmentId },
});

export const openOrderRequestFailure = (message: string): CartActionTypes => ({
  type: CART_OPEN_ORDER_REQUEST_FAILURE,
  payload: { message },
});

export const addItem = (item: IAddItem): CartActionTypes => ({
  type: CART_ADD_ITEM,
  payload: { ...item },
});

export const removeItem = (itemId: string): CartActionTypes => ({
  type: CART_REMOVE_ITEM,
  payload: { itemId },
});

export const updateItem = (
  itemId: string,
  amount: number,
): CartActionTypes => ({
  type: CART_UPDATE_ITEM,
  payload: { itemId, amount },
});

export const deleteOrderRequest = (orderId: string): CartActionTypes => ({
  type: CART_DELETE_ORDER_REQUEST,
  payload: { orderId },
});

export const deleteOrderRequestSuccess = (): CartActionTypes => ({
  type: CART_DELETE_ORDER_REQUEST_SUCCESS,
});

export const deleteOrderRequestFailure = (
  message: string,
): CartActionTypes => ({
  type: CART_DELETE_ORDER_REQUEST_FAILURE,
  payload: { message },
});
