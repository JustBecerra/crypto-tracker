import React from 'react';
import SingleCrypto from '../../components/SingleCrypto';
import LocalCryptos from '../../../store/localAPI/local';
import {Scrolls} from './styles';

const CryptoList = () => (
  <Scrolls>
    {LocalCryptos &&
      LocalCryptos.map(c => {
        return <SingleCrypto key={c.id} {...c} />;
      })}
  </Scrolls>
);

export default CryptoList;
