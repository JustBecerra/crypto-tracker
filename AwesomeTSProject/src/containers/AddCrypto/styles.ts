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

export const modbutton = styled.Button`
  alignSelf: center,
  justifySelf: center,
  paddingVertical: 10px,
  width: 50%,
  backgroundColor: transparent,
`;

export const backbutton = styled.Button`
  alignSelf: flex-start,
  width: 50%,
  elevation: 3px,
  paddingVertical: 10px,
`;

export const addbutton = styled.Button`
  width: 40%,
  height: 7%,
  backgroundColor: ${theme.colors.BackgroundAddButton},
  justifyContent: center,
  alignItems: center,
  alignSelf: flex-end,
  marginRight: 5%,
  position: relative,
  top: 40%,
`;
