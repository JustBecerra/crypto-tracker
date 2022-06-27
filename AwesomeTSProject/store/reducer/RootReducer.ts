import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {cryptoType} from '../types/CryptoTypes';

export const RootReducer = createSlice({
  name: 'Cryptos',
  initialState: {
    cryptos: [] as cryptoType[],
    // loading: false,
  },
  reducers: {
    GET_CRYPTOS: (state, action: PayloadAction<cryptoType[]>) => {
      state.cryptos = action.payload;
    },
  },
});

export const {GET_CRYPTOS} = RootReducer.actions;

export default RootReducer.reducer;
