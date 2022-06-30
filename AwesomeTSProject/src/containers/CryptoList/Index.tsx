import React from 'react';
import SingleCrypto from '../../components/SingleCrypto';
import LocalCryptos from '../../../store/localAPI/local';
import {Scrolls} from './styles';
import AddCrypto from '../AddCrypto';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/index';
import {cryptoType} from '../../../store/types/CryptoTypes';

const CryptoList = () => {
  const Cryptoname = useSelector((state: RootState) => state.selectedCrypto);
  let SelectedCryptos = [] as cryptoType[];
  SelectedCryptos = LocalCryptos.filter(
    C => C.name === Cryptoname.crypto || C.symbol === Cryptoname.crypto,
  );
  return (
    <Scrolls>
      {SelectedCryptos &&
        SelectedCryptos.map(c => {
          return <SingleCrypto key={c.id} {...c} />;
        })}
      <AddCrypto />
    </Scrolls>
  );
};

export default CryptoList;
