import produce from 'immer';

import { AuthState, AuthActionTypes } from './auth.types';

const INITIAL_STATE: AuthState = {
  token: null,
  refreshToken: null,
  signed: false,
};

const auth = (state = INITIAL_STATE, action: AuthActionTypes) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOGIN': {
        const { token, refreshToken } = action.payload;

        draft.token = token;
        draft.refreshToken = refreshToken;
        draft.signed = true;
        break;
      }

      case '@auth/LOGOUT': {
        draft.signed = false;
        draft.token = null;
        draft.refreshToken = null;
        break;
      }

      case '@auth/REFRESH_TOKEN': {
        const { accessToken, refreshToken } = action.payload;

        draft.token = accessToken;
        draft.refreshToken = refreshToken;
        break;
      }

      default:
        break;
    }
  });
};

export default auth;
