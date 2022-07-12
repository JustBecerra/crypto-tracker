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
import {fetchCrypto} from '../../../store/reducer/RootReducer';
import {theme} from '../../utils/theme';

const AddCrypto = () => {
  const [text, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [borderColor, setBorderColor] = useState(theme.colors.gray);

  const cryptos = useSelector(
    (state: RootState) => state.selectedCrypto.cryptos,
  );
  const dispatch = useDispatch<AppDispatch>();

  const findDuplicate = () => {
    return cryptos.find(
      elem =>
        elem.Asset.name === text ||
        elem.Asset.symbol === text ||
        elem.Asset.slug === text,
    );
  };

  const handleCrypto = () => {
    try {
      if (findDuplicate()) {
        Alert.alert('error', 'Crypto already displayed');
      } else {
        dispatch(fetchCrypto(text));
      }
      setModalVisible(!modalVisible);
      onChangeText('');
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
        <CryptoInput
          onBlur={setBorderColor.bind(null, theme.colors.gray)}
          onFocus={setBorderColor.bind(null, theme.colors.CryptoInputColor)}
          style={{borderColor}}
          value={text}
          onChangeText={onChangeText}
          placeholder="Use a name or ticker symbol"
        />
        <Pressable onPress={handleCrypto}>
          <ModalText
            style={{
              color:
                text === '' ? theme.colors.lightgray : theme.colors.TopBarColor,
            }}>
            Add
          </ModalText>
        </Pressable>
      </Modal>
      <Pressable onPress={setModalVisible.bind(null, !modalVisible)}>
        <OpenModalText>+ Add a Cryptocurrency</OpenModalText>
      </Pressable>
    </View>
  );
};

export default AddCrypto;
