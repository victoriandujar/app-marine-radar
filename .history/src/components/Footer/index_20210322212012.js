import React from 'react';

import { Image } from 'react-native';
import { Container, MenuIcon, MenuText } from './styles';

import Teste from '../../assets/Logo/Logo.png';

export default function Footer({ navigation }) {
  return (
    <Container>
      <MenuIcon>
        <Image source={Teste} style={{ width: 30, height: 30 }} />
        <MenuText onPress={() => navigation.navigate('Animals')}>
          Teste
        </MenuText>
      </MenuIcon>

      <MenuIcon>
        <Image source={Teste} style={{ width: 30, height: 30 }} />
        <MenuText onPress={() => navigation.navigate('Animals')}>
          Teste
        </MenuText>
      </MenuIcon>
    </Container>
  );
}
