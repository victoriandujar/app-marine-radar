import React from 'react';

import { Image } from 'react-native';
import { Container, MenuIcon, MenuText } from './styles';

import Teste from '../../assets/Logo/Logo.png';

export default function Footer({ navigation }) {
  return (
    <Container>
      <MenuIcon>
        <Image source={Teste} width="10px" />
        <MenuText onPress={() => navigation.navigate('Animals')}>
          Teste
        </MenuText>
      </MenuIcon>
    </Container>
  );
}
