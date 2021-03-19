import produce from 'immer';

import {
  UserState,
  UserActionTypes,
  UPDATE_PROFILE_REQUEST_SUCCESS,
  ADD_USER_ADDRESS,
  REMOVE_USER_ADDRESS,
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
          adresses: user.adresses,
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

      case ADD_USER_ADDRESS: {
        const { address } = action.payload;

        draft.profile.adresses.push(address);
        break;
      }

      case REMOVE_USER_ADDRESS: {
        const { id } = action.payload;

        const index = draft.profile.adresses.findIndex(item => item.id === id);

        draft.profile.adresses.slice(index, 1);
        break;
      }

      default:
        break;
    }
  });
};

export default user;
