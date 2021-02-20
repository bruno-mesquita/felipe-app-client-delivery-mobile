import { combineReducers } from 'redux';

import auth from './auth/auth.reducer';
import user from './user/user.reducer';
import cart from './cart/cart.reducer';

export default combineReducers({
  auth,
  user,
  cart,
});
