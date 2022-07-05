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

const SingleCrypto = ({name, symbol, value, incDec, imageURL}: cryptoType) => (
  <OneCrypto>
    <CryptoLogo source={imageURL} />
    <NamesContainer>
      <CryptoName>{name}</CryptoName>
      <CryptoSymbol>{symbol}</CryptoSymbol>
    </NamesContainer>
    <ActualValue>${value}</ActualValue>
    {parseInt(incDec, 10) > 2 ? (
      <ArrowCont>
        <Image source={IncreaseArrow} />
        <Increase>{incDec}%</Increase>
      </ArrowCont>
    ) : (
      <ArrowCont>
        <Image source={DecreaseArrow} />
        <Decrease>{incDec}%</Decrease>
      </ArrowCont>
    )}
  </OneCrypto>
);

export default SingleCrypto;
