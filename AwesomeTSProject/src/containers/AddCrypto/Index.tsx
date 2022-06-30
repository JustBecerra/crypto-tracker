import {Modal, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  CryptoInput,
  AddText,
  BackText,
  OpenModalText,
  ModalText,
} from './styles';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../store';
import {GET_CRYPTO} from '../../../store/reducer/RootReducer';

const AddCrypto = () => {
  const [text, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleCrypto = (crypto: string) => {
    try {
      dispatch(GET_CRYPTO(crypto));
      setModalVisible.bind(null, !modalVisible);
    } catch (err) {
      console.log(err);
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
        <CryptoInput value={text} onChangeText={onChangeText} />
        <Pressable onPress={() => handleCrypto(text)}>
          <ModalText>Add</ModalText>
        </Pressable>
      </Modal>
      <Pressable onPress={setModalVisible.bind(null, !modalVisible)}>
        <OpenModalText>+ Add a Cryptocurrency</OpenModalText>
      </Pressable>
    </View>
  );
};

export default AddCrypto;
