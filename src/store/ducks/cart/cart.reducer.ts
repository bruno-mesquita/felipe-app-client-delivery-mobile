import produce from 'immer';

const INITIAL_STATE = {
  orderId: null,
  establishmentId: null,
  items: [],
  fee: 0,
  total: 0,
  payment: 'Dinheiro',
  status: '',
  errorMessage: null,
};

const cart = (state = INITIAL_STATE, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/OPEN_ORDER_REQUEST_SUCCESS': {
        draft.orderId = action.payload.orderId;
        draft.establishmentId = action.payload.establishmentId;
        break;
      }

      case '@cart/ADD_ITEM': {
        const { price, amount } = action.payload;

        const total = price * amount;

        draft.items.push({ ...action.payload, total });
        draft.total += total;
        break;
      }

      case '@cart/REMOVE_ITEM': {
        const { itemId } = action.payload;

        const itemIndex = draft.items.findIndex(item => item.itemId === itemId);

        if (itemIndex !== -1) {
          const item = draft.items[itemIndex];

          draft.items.splice(itemIndex, 1);
          draft.total -= item.total;
        }

        break;
      }

      case '@cart/UPDATE_ITEM': {
        const { itemId, amount } = action.payload;

        const itemIndex = draft.items.findIndex(item => item.itemId === itemId);

        if (itemIndex !== -1) {
          const item = draft.items[itemIndex];

          if (amount === 0) {
            draft.items.splice(itemIndex, 1);
            draft.total -= item.total;
          } else {
            const newTotalItem = item.price * amount;

            draft.total = newTotalItem + (draft.total - item.total);

            draft.items[itemIndex] = { ...item, total: newTotalItem };
          }
        }

        break;
      }

      case '@cart/DELETE_ORDER_REQUEST_SUCCESS': {
        draft = INITIAL_STATE;
        break;
      }

      case '@cart/DELETE_ORDER_REQUEST_FAILURE': {
        draft.errorMessage = action.payload.message;
        break;
      }

      case '@cart/OPEN_ORDER_REQUEST_FAILURE': {
        draft.errorMessage = action.payload.message;
        break;
      }

      default:
        break;
    }
  });
};

export default cart;
