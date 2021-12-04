import { combineReducers } from 'redux';

import cart from './cart/cart.reducer';
import auth from './auth/auth.reducer';

export default combineReducers({
  cart,
  auth,
});
