import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {cryptoType} from '../types/CryptoTypes';

export interface typeState {
  Cryptos: Array<cryptoType>;
}

const initialState: typeState = {
  Cryptos: [],
};

export const RootReducer = createSlice({
  name: 'Cryptos',
  initialState,
  reducers: {
    GET_CRYPTOS: (state, action: PayloadAction<cryptoType>) => {
      state.Cryptos = action.payload;
    },
  },
});

export const {GET_CRYPTOS} = RootReducer.actions;

export default RootReducer.reducer;
