import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_ITEM,
  CartActionTypes,
  IAddItem,
} from './cart.types';

export const addItem = (item: IAddItem): CartActionTypes => ({
  type: CART_ADD_ITEM,
  payload: { ...item },
});

export const removeItem = (itemId: number): CartActionTypes => ({
  type: CART_REMOVE_ITEM,
  payload: { itemId },
});

export const updateItem = (
  itemId: number,
  amount: number,
): CartActionTypes => ({
  type: CART_UPDATE_ITEM,
  payload: { itemId, amount },
});
