export const CART_OPEN_ORDER_REQUEST = '@cart/OPEN_ORDER_REQUEST';
export const CART_OPEN_ORDER_REQUEST_SUCCESS =
  '@cart/OPEN_ORDER_REQUEST_SUCCESS';
export const CART_OPEN_ORDER_REQUEST_FAILURE =
  '@cart/OPEN_ORDER_REQUEST_FAILURE';
export const CART_ADD_ITEM = '@cart/ADD_ITEM';
export const CART_REMOVE_ITEM = '@cart/REMOVE_ITEM';
export const CART_UPDATE_ITEM = '@cart/UPDATE_ITEM';
export const CART_DELETE_ORDER_REQUEST = '@cart/DELETE_ORDER_REQUEST';
export const CART_DELETE_ORDER_REQUEST_SUCCESS =
  '@cart/DELETE_ORDER_REQUEST_SUCCESS';
export const CART_DELETE_ORDER_REQUEST_FAILURE =
  '@cart/DELETE_ORDER_REQUEST_FAILURE';

export interface IAddItem {
  itemId: string;
  amount: number;
  price: number;
  image: string;
  name: string;
  establishmentId: string;
}

export interface OpenOrderRequestAction {
  type: typeof CART_OPEN_ORDER_REQUEST;
  payload: { userId: string; establishmentId: string };
}

export interface OpenOrderRequestSuccessAction {
  type: typeof CART_OPEN_ORDER_REQUEST_SUCCESS;
  payload: { orderId: string; establishmentId: string };
}

export interface OpenOrderRequestFailureAction {
  type: typeof CART_OPEN_ORDER_REQUEST_FAILURE;
  payload: { message: string };
}

export interface AddItemAction {
  type: typeof CART_ADD_ITEM;
  payload: IAddItem;
}

export interface RemoveItemAction {
  type: typeof CART_REMOVE_ITEM;
  payload: { itemId: string };
}

export interface UpdateItemAction {
  type: typeof CART_UPDATE_ITEM;
  payload: { itemId: string; amount: number };
}

export interface DeleteOrderRequestAction {
  type: typeof CART_DELETE_ORDER_REQUEST;
  payload: { orderId: string };
}

export interface DeleteOrderRequestSuccessAction {
  type: typeof CART_DELETE_ORDER_REQUEST_SUCCESS;
}

export interface deleteOrderRequestFailureAction {
  type: typeof CART_DELETE_ORDER_REQUEST_FAILURE;
  payload: { message: string };
}

export type CartActionTypes =
  | OpenOrderRequestAction
  | OpenOrderRequestSuccessAction
  | OpenOrderRequestFailureAction
  | AddItemAction
  | RemoveItemAction
  | UpdateItemAction
  | DeleteOrderRequestAction
  | DeleteOrderRequestSuccessAction
  | deleteOrderRequestFailureAction;

export type Payment = 'Dinheiro' | 'Débito' | 'Crédito';

export interface Item {
  itemId: string;
  amount: number;
  price: number;
  total: number;
  image: string;
  name: string;
}

export interface CartState {
  orderId: string | null;
  establishmentId: string | null;
  items: Item[];
  fee: number;
  total: number;
  payment: Payment;
  status: string;
  errorMessage: string | null;
}
