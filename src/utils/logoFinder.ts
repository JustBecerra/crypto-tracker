import bitcoin from '../../assets/Bitcoin.png';
import dogecoin from '../../assets/Dogecoin.png';
import ethereum from '../../assets/Ethereum.png';
import litecoin from '../../assets/Litecoin.png';
import XRP from '../../assets/XRP.png';

export const logos = (slug: string) => {
  switch (slug) {
    case 'bitcoin': {
      return bitcoin;
    }
    case 'dogecoin': {
      return dogecoin;
    }
    case 'ethereum': {
      return ethereum;
    }
    case 'litecoin': {
      return litecoin;
    }
    case 'xrp': {
      return XRP;
    }
    default:
      return '';
  }
};
