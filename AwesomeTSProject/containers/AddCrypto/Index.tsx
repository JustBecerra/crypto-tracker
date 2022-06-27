import {Modal, View, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {getCryptos} from '../../store/actions/cryptoSlice';
import {CryptoInput, AddText, backtext, modaltext, addBtext} from './styles';

export default function AddCrypto() {
  const [text, onChangeText] = React.useState('');
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

  const styles = StyleSheet.create({
    modbutton: {
      alignSelf: 'center',
      justifySelf: 'center',
      paddingVertical: 10,
      width: '50%',
      backgroundColor: 'transparent',
    },

    backbutton: {
      alignSelf: 'flex-start',
      width: '50%',
      elevation: 3,
      paddingVertical: 10,
    },
    addbutton: {
      width: '40%',
      height: '7%',
      backgroundColor: '#fbd24d',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
      marginRight: '5%',
      position: 'relative',
      top: '40%',
    },
  });

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          style={styles.backbutton}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={backtext}>&lt;- Back to the list</Text>
        </Pressable>
        <AddText>Add a Cryptocurrency</AddText>
        <CryptoInput value={text} onChangeText={onChangeText} />
        <Pressable style={styles.addbutton} onPress={() => callAPI(text)}>
          <Text style={addBtext}>Add</Text>
        </Pressable>
      </Modal>
      <Pressable
        style={styles.modbutton}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={modaltext}>+ Add a Cryptocurrency</Text>
      </Pressable>
    </View>
  );
}
