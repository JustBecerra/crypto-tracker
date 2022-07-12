import React, {useEffect} from 'react';
import SingleCrypto from '../SingleCrypto';
import {Scrolls} from './styles';
import AddCrypto from '../AddCrypto';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../../../store/index';
import {updateCrypto} from '../../../store/reducer/RootReducer';

const CryptoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cryptos = useSelector(
    (state: RootState) => state.selectedCrypto.cryptos,
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch(updateCrypto(cryptos.map(c => c.Asset.slug)));
    }, 6000);
    return () => clearInterval(timerId);
  });

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
