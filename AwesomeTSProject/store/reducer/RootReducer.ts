import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {cryptoType} from '../types/CryptoTypes';

export const RootReducer = createSlice({
  name: 'cryptos',
  initialState: {
    cryptos: [] as cryptoType[],
  },
  reducers: {
    GET_CRYPTOS: (state, action: PayloadAction<cryptoType>) => {
      state.cryptos.push(action.payload);
    },
  },
});

export const {GET_CRYPTOS} = RootReducer.actions;

export default RootReducer.reducer;
