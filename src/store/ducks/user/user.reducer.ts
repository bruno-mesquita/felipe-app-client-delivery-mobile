import produce from 'immer';

import { UserState, UserActionTypes } from './user.types';
import { AUTH_REQUEST_LOGIN_SUCCESS, AUTH_LOGOUT } from '../auth/auth.types';

const INITIAL_STATE: UserState = {
  id: null,
  profile: {
    name: null,
    email: null,
    adresses: [],
  },
  addressActive: null,
};

const user = (state = INITIAL_STATE, action: UserActionTypes) => {
  return produce(state, draft => {
    switch (action.type) {
      case AUTH_REQUEST_LOGIN_SUCCESS: {
        const { user } = action.payload;

        draft.id = user.id;
        draft.profile = {
          name: user.name,
          email: user.email,
          adresses: user.addresses,
        };
        break;
      }

      case AUTH_LOGOUT: {
        draft.id = null;
        draft.profile = { name: null, email: null, adresses: [] };
        draft.addressActive = null;
        break;
      }

      default:
        break;
    }
  });
};

export default user;
