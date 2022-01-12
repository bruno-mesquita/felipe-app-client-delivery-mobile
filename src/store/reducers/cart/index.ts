import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

import type { ICart, IAddItem, IRemoveItem, IUpdateItem } from './types';

const initialState: ICart = {
  items: [],
  fee: 0,
  total: 0,
  establishmentId: null,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IAddItem>) => {
      const { price, amount, establishmentId, fee } = action.payload;

      state.fee = fee;

      const add = () => {
        const total = price * amount;

        state.items.push({ ...action.payload, total });
        state.total += total;
      };

      if (state.items.length !== 0) {
        if (state.establishmentId === establishmentId) {
          add();
        } else {
          Alert.alert(
            'Aviso',
            'Você só pode adicionar produtos de um mesmo estabelecimento'
          );
        }
      } else {
        add();
        state.establishmentId = establishmentId;
      }
    },
    removeItem: (state, action: PayloadAction<IRemoveItem>) => {
      const { itemId } = action.payload;

      const itemIndex = state.items.findIndex(item => item.itemId === itemId);

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];

        state.items.splice(itemIndex, 1);
        state.total -= item.total;

        if (state.items.length === 0) {
          state.establishmentId = null;
        }
      }
    },
    updateItem: (state, action: PayloadAction<IUpdateItem>) => {
      const { itemId, amount } = action.payload;

      const itemIndex = state.items.findIndex(item => item.itemId === itemId);

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];

        if (amount === 0) {
          state.items.splice(itemIndex, 1);
          state.total -= item.total;
        } else {
          const newTotalItem = item.price * amount;

          state.total = newTotalItem + (state.total - item.total);

          state.items[itemIndex] = { ...item, total: newTotalItem };
        }
      }
    },
    clear: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === 'auth/logout',
      () => {
        return initialState;
      }
    );
  },
});

export const cartActions = { ...cart.actions };

export default cart.reducer;
