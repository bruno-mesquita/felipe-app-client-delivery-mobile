import { CartActionTypes, IAddItem } from './cart.types';

export const addItem = (item: IAddItem): CartActionTypes => ({
  type: '@cart/ADD_ITEM',
  payload: { ...item },
});

export const removeItem = (itemId: number): CartActionTypes => ({
  type: '@cart/REMOVE_ITEM',
  payload: { itemId },
});

export const clearCart = (): CartActionTypes => ({
  type: '@cart/CLEAR_CART',
});

export const updateItem = (
  itemId: number,
  amount: number,
): CartActionTypes => ({
  type: '@cart/UPDATE_ITEM',
  payload: { itemId, amount },
});
