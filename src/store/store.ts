import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import CreateStore from './create-store';
import persistReducers from './persist-reducers';

import rootReducer from './ducks/root-reducer';
import rootSaga from './ducks/root-saga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? /* console.tron.createSagaMonitor() */ null
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = CreateStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { persistor, store };
