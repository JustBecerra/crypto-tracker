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
  fontsize: 24px;
  color: ${theme.colors.black};
  position: relative;
  top: 35%;
  left: 6%;
  lineheight: 36px;
  fontweight: 700;
  fontfamily: Inter;
  letterspacing: 0.25px;
`;

export const BackText = styled.Text`
  fontsize: 16px;
  lineheight: 24px;
  fontweight: 400;
  color: ${theme.colors.TopBarColor};
  paddingleft: 10px;
  paddingtop: 10px;
  fontfamily: Inter;
`;

export const OpenModalText = styled.Text`
  margintop: 50px;
  fontsize: 16px;
  lineheight: 24px;
  color: ${theme.colors.TopBarColor};
  textalign: center;
  fontfamily: Inter;
`;

export const ModalText = styled.Text`
  fontsize: 18px;
  lineheight: 24px;
  fontweight: 600;
  letterspacing: 0.25px;
  color: ${theme.colors.TopBarColor};
  backgroundcolor: ${theme.colors.CryptoInputColor};
  textalign: center;
  textalignvertical: center;
  width: 155px;
  height: 48px;
  position: relative;
  top: 280px;
  left: 55.5%;
`;
