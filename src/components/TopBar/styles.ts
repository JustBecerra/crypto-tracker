import styled from 'styled-components/native';
import {theme} from '../../utils/theme';

export const ProfilePicture = styled.Image`
    width: 50px;
    height: 50px;
    position:absolute;
    right: 10%;
    top: 50%;
`;

export const TopBarSection = styled.View`
    padding: 24px;
    height: 100px;
    backgroundColor: ${theme.colors.TopBarColor};
`;

export const Title = styled.Text`
    color: ${theme.colors.white};
    fontSize: 20px;
    fontWeight: bold;
    position:relative;
    top: 25%;
`;
