import { LogoutAction } from '../auth/auth.types';

export const CART_ADD_ITEM = '@cart/ADD_ITEM';
export const CART_REMOVE_ITEM = '@cart/REMOVE_ITEM';
export const CART_UPDATE_ITEM = '@cart/UPDATE_ITEM';
export const CART_CLEAR_CART = '@cart/CLEAR_CART';

export interface IAddItem {
  itemId: number;
  amount: number;
  price: number;
  image: string;
  name: string;
  establishmentId: number;
  fee: number;
}

export interface ClearCartAction {
  type: typeof CART_CLEAR_CART;
}

export interface AddItemAction {
  type: typeof CART_ADD_ITEM;
  payload: IAddItem;
}

export interface RemoveItemAction {
  type: typeof CART_REMOVE_ITEM;
  payload: { itemId: number };
}

export interface UpdateItemAction {
  type: typeof CART_UPDATE_ITEM;
  payload: { itemId: number; amount: number };
}

export type CartActionTypes =
  | AddItemAction
  | RemoveItemAction
  | UpdateItemAction
  | ClearCartAction
  | LogoutAction;

export type Payment = 'Dinheiro' | 'Débito' | 'Crédito';

export interface Item {
  itemId: number;
  amount: number;
  price: number;
  total: number;
  image: string;
  name: string;
}

export interface CartState {
  establishmentId: number;
  items: Item[];
  fee: number;
  total: number;
}
