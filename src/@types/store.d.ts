import { DefaultRootState } from 'react-redux';

import { AuthState } from '../store/ducks/auth/auth.types';
import { CartState } from '../store/ducks/cart/cart.types';

declare module 'react-redux' {
  interface DefaultRootState {
    auth: AuthState;
    cart: CartState;
  }
}

export {};
