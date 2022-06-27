// import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';
import {cryptoType} from '../types/CryptoTypes';

// export const getCryptos = createAsyncThunk(
//   'cryptos/getCryptos',
//   async (slug: string) => {
//     const response = await axios.get(
//       `https://data.messari.io/api/v1/assets/${slug}`,
//     );
//     return response.data as cryptoType[];
//   },
// );

const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState: {
    cryptos: [] as cryptoType[],
    // loading: false,
  },
  reducers: {},
  // extraReducers: builder => {
  //   builder.addCase(getCryptos.pending, state => {
  //     state.loading = true;
  //   });
  //   builder.addCase(getCryptos.fulfilled, (state, action) => {
  //     state.cryptos = state.cryptos.concat(action.payload);
  //     state.loading = false;
  //   });
  //   builder.addCase(getCryptos.rejected, state => {
  //     state.loading = false;
  //   });
  // },
});

export default cryptoSlice.reducer;
