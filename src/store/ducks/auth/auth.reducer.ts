import produce from 'immer';

const INITIAL_STATE = {
  token: null,
};

const auth = (state = INITIAL_STATE, action: any) => {
  return produce(state, draft => {
    switch (action.key) {
      case '@auth/REQUEST_LOGIN_SUCCESS': {
        draft.token = action.payload.token;
        break;
      }

      case '@auth/LOGOUT': {
        draft = INITIAL_STATE;
        break;
      }

      default:
        break;
    }
  });
};

export default auth;
