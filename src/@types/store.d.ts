import { DefaultRootState } from 'react-redux';

import { AuthState } from '../store/ducks/auth/auth.types';
import { UserState } from '../store/ducks/user/user.types';
import { CartState } from '../store/ducks/cart/cart.types';

declare module 'react-redux' {
  interface DefaultRootState {
    auth: AuthState;
    user: UserState;
    cart: CartState;
  }
}

export {};
