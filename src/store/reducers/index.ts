import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth';
import pushToken from './pushToken';
import cart from './cart';

const rootReducer = combineReducers({ auth, pushToken, cart });

export default rootReducer;
