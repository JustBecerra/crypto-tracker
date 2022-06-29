import React from 'react';
import {ProfilePicture, TopBarSection, Title} from './styles';

const TopBar = () => (
  <TopBarSection>
    <ProfilePicture source={require('../../../assets/Profilepic.png')} />
    <Title>CryptoTracker Pro</Title>
  </TopBarSection>
);

export default TopBar;
