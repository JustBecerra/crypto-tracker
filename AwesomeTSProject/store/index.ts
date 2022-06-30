import {configureStore} from '@reduxjs/toolkit';
import cryptoSlice from './actions/cryptoSlice';
import RootReducer from './reducer/RootReducer';

export const store = configureStore({
  reducer: {
    cryptos: cryptoSlice,
    selectedCrypto: RootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
