import {createSlice} from '@reduxjs/toolkit';
import {cryptoType} from '../types/CryptoTypes';

const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState: {
    cryptos: [] as cryptoType[],
  },
  reducers: {},
});

export default cryptoSlice.reducer;
