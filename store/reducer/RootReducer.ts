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

export const updateCrypto = createAsyncThunk(
  'selectedCrypto/updateCrypto',
  async (slugs: string[]) => {
    let newData: cryptoType[] = [];
    for (let i = 0; i < slugs.length; i++) {
      let response = await fetch(
        `https://data.messari.io/api/v1/assets/${slugs[i]}/metrics/market-data`,
      );
      newData.push((await response.json()).data);
    }
    return newData;
  },
);

export const RootReducer = createSlice({
  name: 'cryptos',
  initialState: {
    cryptos: [] as cryptoType[],
    loading: false,
  },
  reducers: {
    ERASE_CRYPTO: (state, action: PayloadAction<string>) => {
      state.cryptos = state.cryptos.filter(
        cryp => cryp.Asset.slug !== action.payload,
      );
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
    builder.addCase(updateCrypto.fulfilled, (state, action) => {
      state.cryptos = action.payload;
    });
  },
});

export const {ERASE_CRYPTO} = RootReducer.actions;

export default RootReducer.reducer;
