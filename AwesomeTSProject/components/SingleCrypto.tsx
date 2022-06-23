import React from 'react';
import {Text, View} from 'react-native';
import {cryptoType} from '../store/types/CryptoTypes';

export default function SingleCrypto(props: cryptoType) {
  // console.log(props);
  return (
    <View>
      {/* <Image /> */}
      <Text>{props.data.name}</Text>
      <Text>{props.data.symbol}</Text>
    </View>
  );
}
