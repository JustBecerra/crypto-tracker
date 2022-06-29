import {Modal, View, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import {
  CryptoInput,
  AddText,
  backtext,
  modaltext,
  modbutton,
  backbutton,
} from './styles';

const AddCrypto = () => {
  const [text, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible.bind(null, !modalVisible);
        }}>
        <Pressable
          style={backbutton}
          onPress={setModalVisible.bind(null, !modalVisible)}>
          <Text style={backtext}>&lt;- Back to the list</Text>
        </Pressable>
        <AddText>Add a Cryptocurrency</AddText>
        <CryptoInput value={text} onChangeText={onChangeText} />
      </Modal>
      <Pressable
        style={modbutton}
        onPress={setModalVisible.bind(null, !modalVisible)}>
        <Text style={modaltext}>+ Add a Cryptocurrency</Text>
      </Pressable>
    </View>
  );
};

export default AddCrypto;
