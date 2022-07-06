import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {cryptoType} from '../types/CryptoTypes';

export const fetchCrypto = createAsyncThunk(
  'selectedCrypto/fetchCrypto',
  async (slug: string) => {
    const response = await fetch(
      `https://data.messari.io/api/v1/assets/${slug}/metrics/market-data`,
    );
    return (await response.json()).data as cryptoType;
  },
);

export const RootReducer = createSlice({
  name: 'cryptos',
  initialState: {
    cryptos: [] as cryptoType[],
    loading: false,
  },
  reducers: {
    GET_CRYPTOS: (state, action: PayloadAction<cryptoType>) => {
      state.cryptos.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCrypto.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCrypto.fulfilled, (state, action) => {
      state.cryptos.push(action.payload);
      state.loading = false;
    });
    builder.addCase(fetchCrypto.rejected, state => {
      state.loading = false;
    });
  },
});

export const {GET_CRYPTOS} = RootReducer.actions;

export default RootReducer.reducer;
