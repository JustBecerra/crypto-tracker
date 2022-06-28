import React from 'react';
import {ProfilePicture, TopBarSection, Title} from './styles';

export default function TopBar() {
  return (
    <TopBarSection>
      <ProfilePicture source={require('../../assets/Profilepic.png')} />
      <Title>CryptoTracker Pro</Title>
    </TopBarSection>
  );
}
