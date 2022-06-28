import styled from 'styled-components/native';

export const OneCrypto = styled.View`
  width: 100%;
  height: 100px;
  marginBottom: 10px;
`;

export const NamesContainer = styled.View`
  width:25%;
  position: relative;
  left: 22%;
  top: 20%;
`;

export const CryptoName = styled.Text`
  color: black;
  fontSize: 20px;
  position:relative;
  bottom:35px;
`;

export const CryptoSymbol = styled.Text`
  color: gray;
  fontSize: 16px;
  position:relative;
  bottom:35px;
`;

export const CryptoLogo = styled.Image`
  width: 45px;
  height: 45px;
  position:relative;
  left: 30px;
  top: 30px;
`;

export const ActualValue = styled.Text`
  position: relative;
  fontSize: 20px;
  color: black;
  left: 75%;
  bottom: 65%;
`;

export const Increase = styled.Text`
  position: relative;
  fontSize: 14px;
  color: green;
  left: 82%;
  bottom: 55%;
`;

export const Decrease = styled.Text`
  position: relative;
  fontSize: 14px;
  color: red;
  left: 82%;
  bottom: 55%;
`;

export const IncArrow = styled.Image`

`;

export const DecArrow = styled.Image`
 
`;

export const ArrowCont = styled.View`
  position:absolute;
  right:15%;
  top:60%;
`;
