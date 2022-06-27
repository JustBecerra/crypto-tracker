import {cryptoType} from '../types/CryptoTypes';

export const LocalCryptos: cryptoType[] = [
  {
    id: 'BCT',
    symbol: 'BCT',
    name: 'Bitcoin',
    imageURL: require('../../assets/Bitcoin.png'),
  },
  {
    id: 'ETH',
    symbol: 'ETH',
    name: 'Ethereum',
    imageURL: require('../../assets/Ethereum.png'),
  },
  {
    id: 'XRP',
    symbol: 'XRP',
    name: 'XRP',
    imageURL: require('../../assets/XRP.png'),
  },
  {
    id: 'LTC',
    symbol: 'LTC',
    name: 'Litecoin',
    imageURL: require('../../assets/Litecoin.png'),
  },
  {
    id: 'DOGE',
    symbol: 'DOGE',
    name: 'Dogecoin',
    imageURL: require('../../assets/Dogecoin.png'),
  },
];
