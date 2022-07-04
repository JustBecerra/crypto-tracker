import styled from 'styled-components/native';
import {theme} from '../../utils/theme';

export const CryptoInput = styled.TextInput`
  border: 2px solid ${theme.colors.gray};
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

export const BackText = styled.Text`
  fontSize: 20px;
  lineHeight: 21px;
  fontWeight: bold;
  letterSpacing: 0.25px;
  color: ${theme.colors.gray};
  paddingLeft: 10px;
  paddingTop: 10px;
`;

export const OpenModalText = styled.Text`
  paddingVertical: 10px;
  fontSize: 20px;
  lineHeight: 21px;
  fontWeight: bold;
  letterSpacing: 0.25px;
  color: ${theme.colors.gray};
  textAlign:center;
`;

export const ModalText = styled.Text`
  fontSize: 20px;
  lineHeight: 21px;
  fontWeight: bold;
  letterSpacing: 0.25px;
  color: ${theme.colors.TopBarColor};
  backgroundColor:${theme.colors.BackgroundAddButton};
  textAlign: center;
  textAlignVertical: center;
  width: 45%;
  height: 50px;
  position: absolute;
  top: 280px;
  left: 50%;
`;
