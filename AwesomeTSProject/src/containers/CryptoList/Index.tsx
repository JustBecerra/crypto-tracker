import React from 'react';
import SingleCrypto from '../../components/SingleCrypto';
import {Scrolls} from './styles';
import AddCrypto from '../AddCrypto';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/index';

const CryptoList = () => {
  const cryptos = useSelector(
    (state: RootState) => state.selectedCrypto.cryptos,
  );

  return (
    <Scrolls>
      {cryptos &&
        cryptos.map(c => {
          return <SingleCrypto key={c.Asset.id} {...c} />;
        })}
      <AddCrypto />
    </Scrolls>
  );
};

export default CryptoList;
