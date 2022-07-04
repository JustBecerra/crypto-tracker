import React from 'react';
import SingleCrypto from '../../components/SingleCrypto';
import {Scrolls} from './styles';
import AddCrypto from '../AddCrypto';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/index';

const CryptoList = () => {
  const Cryptos = useSelector(
    (state: RootState) => state.selectedCrypto.cryptos,
  );

  return (
    <Scrolls>
      {Cryptos &&
        Cryptos.map(c => {
          return <SingleCrypto key={c.id} {...c} />;
        })}
      <AddCrypto />
    </Scrolls>
  );
};

export default CryptoList;
