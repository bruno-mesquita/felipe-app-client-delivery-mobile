import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const persistReducers = (reducers: any) => {
  return persistReducer(
    {
      key: '@flipp/client-mobile',
      storage: AsyncStorage,
      whitelist: ['cart'],
    },
    reducers,
  );
};

export default persistReducers;
