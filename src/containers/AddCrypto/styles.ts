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
  lineHeight: 36px;
  fontWeight: 700;
  fontFamily: Inter;
  letterSpacing: 0.25px;
`;

export const BackText = styled.Text`
  fontSize: 16px;
  lineHeight: 24px;
  fontWeight: 400;
  color: ${theme.colors.TopBarColor};
  paddingLeft: 10px;
  paddingTop: 10px;
  fontFamily: Inter;
`;

export const OpenModalText = styled.Text`
  marginTop: 50px;
  fontSize: 16px;
  lineHeight: 24px;
  color: ${theme.colors.TopBarColor};
  textAlign: center;
  fontFamily: Inter;
`;

export const ModalText = styled.Text`
  fontSize: 18px;
  lineHeight: 24px;
  fontWeight: 600;
  letterSpacing: 0.25px;
  color: ${theme.colors.TopBarColor};
  backgroundColor: ${theme.colors.CryptoInputColor};
  textAlign: center;
  textAlignVertical: center;
  width: 155px;
  height: 48px;
  position: relative;
  top: 280px;
  left: 55.5%;
`;
