import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import SingleCrypto from '../components/SingleCrypto';
import AddCrypto from './AddCrypto';

export default function CryptoList() {
  const {cryptos, loading} = useSelector((state: RootState) => state.cryptos);

  // console.log(cryptos.data.slug);
  // const CustomButton = () => (
  //   <AddButton>
  //     <ButtonText />
  //   </AddButton>
  // );
  // const AddButton = styled.Button`
  //   background: transparent;
  // `;
  // const ButtonText = styled.Text`
  //   font-size: 15px;
  //   color: grey;
  //   text-align: center;
  // `;

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }
  return (
    <View>
      {cryptos &&
        cryptos.map(c => {
          return <SingleCrypto key={c.data.id} data={c.data} />;
        })}
      <AddCrypto />
    </View>
  );
}
