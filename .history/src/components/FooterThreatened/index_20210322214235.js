import React from 'react';

import { Image } from 'react-native';
import { Container, MenuIcon, MenuText } from './styles';

import Teste from '../../assets/Logo/Logo.png';

export default function FooterThreatened({ navigation }) {
  return (
    <Container>
      <MenuIcon>
        <Image source={Teste} style={{ width: 24, height: 24 }} />
        <MenuText onPress={() => navigation.navigate('Home')}>Home</MenuText>
      </MenuIcon>

      <MenuIcon>
        <Image source={Teste} style={{ width: 24, height: 24 }} />
        <MenuText onPress={() => navigation.navigate('Animals')}>
          Animais
        </MenuText>
      </MenuIcon>

      <MenuIcon>
        <Image source={Teste} style={{ width: 24, height: 24 }} />
        <MenuText onPress={() => navigation.navigate('Map')}>Mapa</MenuText>
      </MenuIcon>

      <MenuIcon>
        <Image source={Teste} style={{ width: 24, height: 24 }} />
        <MenuText onPress={() => navigation.navigate('Threatened')}>
          Ameaçados
        </MenuText>
      </MenuIcon>
    </Container>
  );
}
