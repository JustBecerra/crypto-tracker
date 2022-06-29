import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../utils/theme';

export const CryptoInput = styled.TextInput`
  border: 2px solid ${theme.colors.CryptoInputColor};
  width: 90%;
  height: 8%;
  position: relative;
  top: 38%;
  margin: 5%;
`;

export const AddText = styled.Text`
  fontSize: 24px;
  color: ${theme.colors.black};
  position: relative;
  top: 35%;
  left: 6%;
  fontWeight: bold;
`;

export const backtext = styled.Text`
  fontSize: 20px,
  lineHeight: 21px,
  fontWeight: bold,
  letterSpacing: 0.25,
  color: ${theme.colors.gray},
`;

export const modaltext = styled.Text`
  fontSize: 16px,
  lineHeight: 21px,
  fontWeight: bold,
  letterSpacing: 0.25,
  color: ${theme.colors.gray},
`;
export const addBtext = styled.Text`
  fontSize: 16px,
  lineHeight: 21px,
  fontWeight: bold,
  letterSpacing: 0.25,
  color: ${theme.colors.gray},
`;

export const styles = StyleSheet.create({
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
