import { configureStore } from '@reduxjs/toolkit';
import reducerBagController from './reducers/bag-controller/reducer-bag-controller';
import counterReducer from './reducers/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    bagController: reducerBagController
    // outros reducers podem ser adicionados aqui
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;