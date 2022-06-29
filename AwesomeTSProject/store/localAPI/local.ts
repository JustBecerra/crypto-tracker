import {cryptoType} from '../types/CryptoTypes';

const LocalCryptos: cryptoType[] = [
  {
    id: 'BCT',
    symbol: 'BCT',
    name: 'Bitcoin',
    value: '1.234',
    incDec: '2.3%',
    imageURL: require('../../assets/Bitcoin.png'),
  },
  {
    id: 'ETH',
    symbol: 'ETH',
    name: 'Ethereum',
    value: '1.485',
    incDec: '5.4%',
    imageURL: require('../../assets/Ethereum.png'),
  },
  {
    id: 'XRP',
    symbol: 'XRP',
    name: 'XRP',
    value: '0.923',
    incDec: '2.3%',
    imageURL: require('../../assets/XRP.png'),
  },
  {
    id: 'LTC',
    symbol: 'LTC',
    name: 'Litecoin',
    value: '1.214',
    incDec: '3.4%',
    imageURL: require('../../assets/Litecoin.png'),
  },
  {
    id: 'DOGE',
    symbol: 'DOGE',
    name: 'Dogecoin',
    value: '5.834',
    incDec: '5.2%',
    imageURL: require('../../assets/Dogecoin.png'),
  },
  {
    id: 'PRC',
    symbol: 'PRC',
    name: 'Prepcoin',
    value: '1.912',
    incDec: '2.1%',
    imageURL: require('../../assets/Dogecoin.png'),
  },
  {
    id: 'FRC',
    symbol: 'FRC',
    name: 'Fillercoin',
    value: '0.129',
    incDec: '1.2%',
    imageURL: require('../../assets/Dogecoin.png'),
  },
  {
    id: 'GDE',
    symbol: 'GDE',
    name: 'Gooddoge',
    value: '1.109',
    incDec: '3.2%',
    imageURL: require('../../assets/Dogecoin.png'),
  },
  {
    id: 'BDE',
    symbol: 'BDE',
    name: 'Baddoge',
    value: '3.923',
    incDec: '2.1%',
    imageURL: require('../../assets/Dogecoin.png'),
  },
  {
    id: 'HDE',
    symbol: 'HDE',
    name: 'Heydoge',
    value: '1.902',
    incDec: '5.3%',
    imageURL: require('../../assets/Dogecoin.png'),
  },
];

export default LocalCryptos;
