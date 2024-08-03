import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter';
import reducerBagController from './reducers/reducer-bag-controller';

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