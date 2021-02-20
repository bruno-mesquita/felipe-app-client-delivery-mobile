import { all } from 'redux-saga/effects';

import auth from './auth/auth.sagas';
import user from './user/user.sagas';
import cart from './cart/cart.sagas';

export default function* rootSaga() {
  return yield all([auth, user, cart]);
}
