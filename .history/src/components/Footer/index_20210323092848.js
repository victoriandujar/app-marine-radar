import React from 'react';

import { Image } from 'react-native';
import { Container, MenuIcon, MenuText } from './styles';

import Home from '../../assets/Menu/home.png';
import Animais from '../../assets/Menu/baleia.png';
import Mapa from '../../assets/Menu/mapa.png';

import Teste from '../../assets/Logo/Logo.png';

export default function Footer({ navigation }) {
  return (
    <Container>
      <MenuIcon>
        <Image source={Home} style={{ width: 24, height: 24 }} />
        <MenuText onPress={() => navigation.navigate('Home')}>Home</MenuText>
      </MenuIcon>

      <MenuIcon>
        <Image source={Animais} style={{ width: 24, height: 24 }} />
        <MenuText onPress={() => navigation.navigate('Animals')}>
          Animais
        </MenuText>
      </MenuIcon>

      <MenuIcon>
        <Image source={Mapa} style={{ width: 24, height: 24 }} />
        <MenuText onPress={() => navigation.navigate('Map')}>Mapa</MenuText>
      </MenuIcon>

      <MenuIcon>
        <Image source={Animais} style={{ width: 24, height: 24 }} />
        <MenuText onPress={() => navigation.navigate('Threatened')}>
          Ameaçados
        </MenuText>
      </MenuIcon>
    </Container>
  );
}
