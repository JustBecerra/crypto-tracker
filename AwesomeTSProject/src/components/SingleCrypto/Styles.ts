import styled from 'styled-components/native';
import {theme} from '../../utils/theme';

export const OneCrypto = styled.View`
  width: 88%;
  height: 100px;
  marginBottom: 10px;
  borderBottomWidth: 0.2px;
  borderBottomColor: solid ${theme.colors.dividergray};
  display:flex;
  alignSelf: center;
`;

export const NamesContainer = styled.View`
  width:25%;
  position: relative;
  left: 18%;
  top: 20%;
`;

export const CryptoName = styled.Text`
  color: ${theme.colors.black};
  fontSize: 20px;
  position:relative;
  bottom:35px;
`;

export const CryptoSymbol = styled.Text`
  color: ${theme.colors.gray};
  fontSize: 16px;
  position:relative;
  bottom:35px;
`;

export const CryptoLogo = styled.Image`
  width: 45px;
  height: 45px;
  position:relative;
  left: 5px;
  top: 30px;
`;

export const ActualValue = styled.Text`
  position: relative;
  fontSize: 20px;
  color: ${theme.colors.black};
  left: 82%;
  bottom: 65%;
`;

export const Increase = styled.Text`
  position: relative;
  fontSize: 14px;
  color: ${theme.colors.green};
  left: 82%;
  bottom: 55%;
`;

export const Decrease = styled.Text`
  position: relative;
  fontSize: 14px;
  color: ${theme.colors.red};
  left: 82%;
  bottom: 55%;
`;

export const ArrowCont = styled.View`
  position:absolute;
  right:7%;
  top:60%;
`;
