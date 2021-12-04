import { DefaultRootState } from 'react-redux';

import { CartState } from '../store/ducks/cart/cart.types';
import { AuthState } from '../store/ducks/auth/auth.types';

declare module 'react-redux' {
  interface DefaultRootState {
    cart: CartState;
    auth: AuthState;
  }
}

export {};
