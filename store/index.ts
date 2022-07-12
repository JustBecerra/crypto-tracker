import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './reducer/RootReducer';

export const store = configureStore({
  reducer: {
    selectedCrypto: RootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
