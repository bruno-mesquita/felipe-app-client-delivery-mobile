import { DefaultRootState } from 'react-redux';

import { CartState } from '../store/ducks/cart/cart.types';

declare module 'react-redux' {
  interface DefaultRootState {
    cart: CartState;
  }
}

export {};
