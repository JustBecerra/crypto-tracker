import React from 'react';
import {cryptoType} from '../../store/types/CryptoTypes';
import {
  OneCrypto,
  NamesContainer,
  CryptoName,
  CryptoSymbol,
  CryptoLogo,
} from './Styles';

export default function SingleCrypto({name, symbol, imageURL}: cryptoType) {
  return (
    <OneCrypto>
      <CryptoLogo source={imageURL} />
      <NamesContainer>
        <CryptoName>{name}</CryptoName>
        <CryptoSymbol>{symbol}</CryptoSymbol>
      </NamesContainer>
    </OneCrypto>
  );
}
