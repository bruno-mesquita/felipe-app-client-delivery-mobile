import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  name: null,
  email: null,
  adresses: null,
  addressActive: null,
};

const user = (state = INITIAL_STATE, action: any) => {
  return produce(state, draft => {
    switch (action.key) {
      case '@auth/LOGOUT': {
        draft = INITIAL_STATE;
        break;
      }

      default:
        break;
    }
  });
};

export default user;
