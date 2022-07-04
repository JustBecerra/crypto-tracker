import {Modal, View, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import {
  CryptoInput,
  AddText,
  BackText,
  OpenModalText,
  ModalText,
} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store';
import {GET_CRYPTOS} from '../../../store/reducer/RootReducer';
import LocalCryptos from '../../../store/localAPI/local';
import {cryptoType} from '../../../store/types/CryptoTypes';
import {theme} from '../../utils/theme';

const AddCrypto = () => {
  const [text, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [borderColor, setBorderColor] = useState(theme.colors.gray);

  const Cryptos = useSelector(
    (state: RootState) => state.selectedCrypto.cryptos,
  );
  const dispatch = useDispatch<AppDispatch>();

  const findDuplicate = () => {
    let duplicate = Cryptos.find(
      elem => elem.name === text || elem.symbol === text,
    );
    if (duplicate !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const findStock = () => {
    let newCrypto = LocalCryptos.find(
      elem => elem.name === text || elem.symbol === text,
    );
    if (newCrypto === undefined) {
      return false;
    } else {
      return newCrypto;
    }
  };

  const handleCrypto = () => {
    try {
      if (findDuplicate() === true) {
        setModalVisible(!modalVisible);
        onChangeText('');
        Alert.alert('error', 'Crypto already displayed');
      } else if (findStock() === false) {
        setModalVisible(!modalVisible);
        onChangeText('');
        Alert.alert('error', 'Crypto not available');
      } else {
        dispatch(GET_CRYPTOS(findStock() as cryptoType));
        setModalVisible(!modalVisible);
        onChangeText('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const setButtonColor = () => {
    if (borderColor === theme.colors.gray) {
      return theme.colors.lightgray;
    } else {
      return theme.colors.TopBarColor;
    }
  };

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible.bind(null, !modalVisible);
        }}>
        <Pressable onPress={setModalVisible.bind(null, !modalVisible)}>
          <BackText>&lt; Back to the list</BackText>
        </Pressable>
        <AddText>Add a Cryptocurrency</AddText>
        <CryptoInput
          onBlur={() => setBorderColor(theme.colors.gray)}
          onFocus={() => setBorderColor(theme.colors.CryptoInputColor)}
          style={{borderColor}}
          value={text}
          onChangeText={onChangeText}
          placeholder="Enter name of crypto"
        />
        <Pressable onPress={() => handleCrypto()}>
          <ModalText style={{color: setButtonColor()}}>Add</ModalText>
        </Pressable>
      </Modal>
      <Pressable onPress={setModalVisible.bind(null, !modalVisible)}>
        <OpenModalText>+ Add a Cryptocurrency</OpenModalText>
      </Pressable>
    </View>
  );
};

export default AddCrypto;
