import React from 'react';
import {cryptoType} from '../../../store/types/CryptoTypes';
import {
  OneCrypto,
  NamesContainer,
  CryptoName,
  CryptoSymbol,
  CryptoLogo,
  ActualValue,
  Increase,
  Decrease,
  ArrowCont,
} from './styles';
import IncreaseArrow from '../../../assets/increaseArrow.png';
import DecreaseArrow from '../../../assets/decreaseArrow.png';
import {Image} from 'react-native';
import {logos} from '../../utils/logoFinder';
import {useDispatch} from 'react-redux';
import {ERASE_CRYPTO} from '../../../store/reducer/RootReducer';
import {TouchableWithoutFeedback} from 'react-native';

const SingleCrypto = ({Asset, market_data}: cryptoType) => {
  const dispatch = useDispatch();

  const handleErase = async (slug: string) => {
    dispatch(ERASE_CRYPTO(slug));
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleErase(Asset.slug)}>
      <OneCrypto>
        <CryptoLogo source={logos(Asset.slug)} />
        <NamesContainer>
          <CryptoName>{Asset.name}</CryptoName>
          <CryptoSymbol>{Asset.symbol}</CryptoSymbol>
        </NamesContainer>
        <ActualValue>${market_data.price_usd.toFixed(2)}</ActualValue>
        {market_data.percent_change_usd_last_24_hours > 2 ? (
          <ArrowCont>
            <Image source={IncreaseArrow} />
            <Increase>
              {market_data.percent_change_usd_last_24_hours.toFixed(2)}%
            </Increase>
          </ArrowCont>
        ) : (
          <ArrowCont>
            <Image source={DecreaseArrow} />
            <Decrease>
              {market_data.percent_change_usd_last_24_hours.toFixed(2)}%
            </Decrease>
          </ArrowCont>
        )}
      </OneCrypto>
    </TouchableWithoutFeedback>
  );
};

export default SingleCrypto;
