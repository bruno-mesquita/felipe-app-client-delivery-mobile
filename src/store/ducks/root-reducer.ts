import { combineReducers } from 'redux';

import auth from './auth/auth.reducer';
import cart from './cart/cart.reducer';

export default combineReducers({
  auth,
  cart,
});
