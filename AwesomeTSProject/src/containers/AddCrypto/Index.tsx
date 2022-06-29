import {Modal, View, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import {CryptoInput, AddText, backtext, modaltext, styles} from './styles';

const AddCrypto = () => {
  const [text, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  let modalBind = setModalVisible.bind(null, !modalVisible);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          modalBind();
        }}>
        <Pressable style={styles.backbutton} onPress={() => modalBind()}>
          <Text style={backtext}>&lt;- Back to the list</Text>
        </Pressable>
        <AddText>Add a Cryptocurrency</AddText>
        <CryptoInput value={text} onChangeText={onChangeText} />
      </Modal>
      <Pressable style={styles.modbutton} onPress={() => modalBind()}>
        <Text style={modaltext}>+ Add a Cryptocurrency</Text>
      </Pressable>
    </View>
  );
};

export default AddCrypto;
