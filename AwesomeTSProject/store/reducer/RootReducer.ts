import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const RootReducer = createSlice({
  name: 'selectedCrypto',
  initialState: {
    crypto: '' as string,
  },
  reducers: {
    GET_CRYPTO: (state, action: PayloadAction<string>) => {
      state.crypto = action.payload;
    },
  },
});

export const {GET_CRYPTO} = RootReducer.actions;

export default RootReducer.reducer;
