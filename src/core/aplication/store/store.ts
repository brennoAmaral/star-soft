import { configureStore } from '@reduxjs/toolkit';
import reducerAsiderController from './reducers/aside-controler/aside-controller';
import reducerBagController from './reducers/bag-controller/reducer-bag-controller';

const store = configureStore({
  reducer: {
    bagController: reducerBagController,
    asideController: reducerAsiderController
    // outros reducers podem ser adicionados aqui
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;