import {View} from 'react-native';
import React from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import {RootState} from '../../store';
import SingleCrypto from '../../components/SingleCrypto/Index';
import {LocalCryptos} from '../../store/localAPI/Index';
// import {GET_CRYPTOS} from '../../store/reducer/RootReducer';

export default function CryptoList() {
  // const cryptos = useSelector((state: RootState) => state.cryptos);
  // const dispatch = useDispatch;

  // if (loading) {
  //   return (
  //     <View>
  //       <Text>loading...</Text>
  //     </View>
  //   );
  // }
  // console.log(LocalCryptos);
  return (
    <View>
      {LocalCryptos &&
        LocalCryptos.map(c => {
          return <SingleCrypto key={c.id} {...c} />;
        })}
      {/* <AddCrypto /> */}
    </View>
  );
}
