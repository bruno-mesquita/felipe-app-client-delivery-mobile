import produce from 'immer';

import {
  UserState,
  UserActionTypes,
  UPDATE_PROFILE_REQUEST_SUCCESS,
} from './user.types';
import { AUTH_REQUEST_LOGIN_SUCCESS, AUTH_LOGOUT } from '../auth/auth.types';

const INITIAL_STATE: UserState = {
  id: null,
  profile: {
    name: null,
    avatar: null,
    cpf: null,
    phone: null,
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
          cpf: user.cpf,
          avatar: user.avatar,
          phone: user.phone,
          adresses: user.addresses,
        };
        break;
      }

      case AUTH_LOGOUT: {
        draft.id = null;
        draft.profile = {
          name: null,
          email: null,
          phone: null,
          cpf: null,
          avatar: null,
          adresses: [],
        };
        draft.addressActive = null;
        break;
      }

      case UPDATE_PROFILE_REQUEST_SUCCESS: {
        const { profile } = action.payload;

        draft.profile = { ...draft.profile, ...profile };
        break;
      }

      default:
        break;
    }
  });
};

export default user;
