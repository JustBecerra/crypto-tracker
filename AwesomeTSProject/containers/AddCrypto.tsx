import {Modal, TextInput, View, Button} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store';
import {getCryptos} from '../store/actions/cryptoSlice';

export default function AddCrypto() {
  const [text, onChangeText] = React.useState('slug of crypto');
  const [modalVisible, setModalVisible] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const callAPI = async (text: string) => {
    try {
      dispatch(getCryptos(text));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Modal
        animationType="slide"
        //   transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Button
          title="back to the list"
          onPress={() => setModalVisible(!modalVisible)}
        />
        <TextInput value={text} onChangeText={onChangeText} />
        <Button title="add" onPress={() => callAPI(text)} />
      </Modal>
      <Button
        title="+ Add a Cryptocurrency"
        onPress={() => setModalVisible(!modalVisible)}
      />
    </View>
  );
}
