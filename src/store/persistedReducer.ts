import { persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers';

const persistedReducer = persistReducer(
  {
    key: '@flipp-client',
    whitelist: ['auth', 'cart'],
    storage,
  },
  rootReducer
);

export default persistedReducer;
