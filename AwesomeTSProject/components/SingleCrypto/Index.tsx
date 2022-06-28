import React from 'react';
import {cryptoType} from '../../store/types/CryptoTypes';
import {
  OneCrypto,
  NamesContainer,
  CryptoName,
  CryptoSymbol,
  CryptoLogo,
  ActualValue,
  Increase,
  Decrease,
  IncArrow,
  DecArrow,
  ArrowCont,
} from './Styles';

export default function SingleCrypto({
  name,
  symbol,
  value,
  incDec,
  imageURL,
}: cryptoType) {
  return (
    <OneCrypto>
      <CryptoLogo source={imageURL} />
      <NamesContainer>
        <CryptoName>{name}</CryptoName>
        <CryptoSymbol>{symbol}</CryptoSymbol>
      </NamesContainer>
      <ActualValue>${value}</ActualValue>
      {parseInt(incDec, 10) > 2.5 ? (
        <ArrowCont>
          <IncArrow source={require('../../assets/increaseArrow.png')} />
          <Increase>{incDec}</Increase>
        </ArrowCont>
      ) : (
        <ArrowCont>
          <DecArrow source={require('../../assets/decreaseArrow.png')} />
          <Decrease>{incDec}</Decrease>
        </ArrowCont>
      )}
    </OneCrypto>
  );
}
