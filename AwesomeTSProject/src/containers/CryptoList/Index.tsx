import React from 'react';
import SingleCrypto from '../../components/SingleCrypto/Index';
import {LocalCryptos} from '../../../store/localAPI/Index';
import {Scrolls} from './styles';

export default function CryptoList() {
  return (
    <Scrolls>
      {LocalCryptos &&
        LocalCryptos.map(c => {
          return <SingleCrypto key={c.id} {...c} />;
        })}
      {/* <AddCrypto /> */}
    </Scrolls>
  );
}
