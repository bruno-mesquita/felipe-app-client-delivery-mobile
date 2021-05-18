import { Alert } from 'react-native';
import produce from 'immer';

import { CartState, CartActionTypes } from './cart.types';

const INITIAL_STATE: CartState = {
  items: [],
  fee: 0,
  total: 0,
  establishmentId: null,
};

const cart = (state = INITIAL_STATE, action: CartActionTypes) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_ITEM': {
        const { price, amount, establishmentId } = action.payload;

        const add = () => {
          const total = price * amount;

          draft.items.push({ ...action.payload, total });
          draft.total += total;
        };

        if (draft.items.length !== 0) {
          if (draft.establishmentId === establishmentId) {
            add();
          } else {
            Alert.alert(
              'Você só pode adicionar produtos de um mesmo estabelecimento',
            );
          }
        } else {
          add();
          draft.establishmentId = establishmentId;
        }

        break;
      }

      case '@cart/REMOVE_ITEM': {
        const { itemId } = action.payload;

        const itemIndex = draft.items.findIndex(item => item.itemId === itemId);

        if (itemIndex !== -1) {
          const item = draft.items[itemIndex];

          draft.items.splice(itemIndex, 1);
          draft.total -= item.total;

          if (draft.items.length === 0) {
            draft.establishmentId = null;
          }
        }

        break;
      }

      case '@cart/UPDATE_ITEM': {
        const { itemId, amount } = action.payload;

        const itemIndex = draft.items.findIndex(item => item.itemId === itemId);

        if (itemIndex !== -1) {
          const item = draft.items[itemIndex];

          if (amount === 0) {
            draft.items.splice(itemIndex, 1);
            draft.total -= item.total;
          } else {
            const newTotalItem = item.price * amount;

            draft.total = newTotalItem + (draft.total - item.total);

            draft.items[itemIndex] = { ...item, total: newTotalItem };
          }
        }
        break;
      }

      case '@cart/CLEAR_CART': {
        draft.items = [];
        draft.fee = 0;
        draft.total = 0;
        draft.establishmentId = null;
        break;
      }

      case '@auth/LOGOUT': {
        draft.items = [];
        draft.fee = 0;
        draft.total = 0;
        draft.establishmentId = null;
        break;
      }

      default:
        break;
    }
  });
};

export default cart;
