import storage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
  return persistReducer(
    {
      key: '@flipp-delivery',
      storage,
      whitelist: ['auth', 'user', 'cart'],
    },
    reducers,
  );
};
