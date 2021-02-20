interface IAddItem {
  itemId: string;
  amount: number;
  price: number;
}

export const openOrderRequest = (userId: string, establishmentId: string) => ({
  type: '@cart/OPEN_ORDER_REQUEST',
  payload: { userId, establishmentId },
});

export const openOrderRequestSuccess = (
  orderId: string,
  establishmentId: string,
) => ({
  type: '@cart/OPEN_ORDER_REQUEST_SUCCESS',
  payload: { orderId, establishmentId },
});

export const openOrderRequestFailure = (message: string) => ({
  type: '@cart/OPEN_ORDER_REQUEST_FAILURE',
  payload: { message },
});

export const addItem = (item: IAddItem) => ({
  type: '@cart/ADD_ITEM',
  payload: { ...item },
});

export const removeItem = (itemId: string) => ({
  type: '@cart/REMOVE_ITEM',
  payload: { itemId },
});

export const updateItem = (itemId: string, amount: number) => ({
  type: '@cart/UPDATE_ITEM',
  payload: { itemId, amount },
});

export const deleteOrderRequest = (orderId: string) => ({
  type: '@cart/DELETE_ORDER_REQUEST',
  payload: { orderId },
});

export const deleteOrderRequestSuccess = () => ({
  type: '@cart/DELETE_ORDER_REQUEST_SUCCESS',
});

export const deleteOrderRequestFailure = (message: string) => ({
  type: '@cart/DELETE_ORDER_REQUEST_FAILURE',
  payload: { message },
});
