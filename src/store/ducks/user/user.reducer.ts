import produce from 'immer';

import { UserState, AUTH_LOGOUT, UserActionTypes } from './user.types';

const INITIAL_STATE: UserState = {
  id: null,
  name: null,
  email: null,
  adresses: null,
  addressActive: null,
};

const user = (state = INITIAL_STATE, action: UserActionTypes) => {
  return produce(state, draft => {
    switch (action.type) {
      case AUTH_LOGOUT: {
        draft = { ...INITIAL_STATE };
        break;
      }

      default:
        break;
    }
  });
};

export default user;
