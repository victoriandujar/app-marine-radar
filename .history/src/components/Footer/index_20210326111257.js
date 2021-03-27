import React from 'react';

import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, MenuIcon, MenuText } from './styles';

import Animais from '../../assets/Menu/baleia.png';

Icon.loadFont();

export default function Footer({ navigation }) {
  return (
    <Container>
      <MenuIcon>
        <Icon name="home" size={20} color="#fff" />
        <MenuText onPress={() => navigation.navigate('Home')}>Home</MenuText>
      </MenuIcon>

      <MenuIcon>
        <Icon name="fish" />
        <MenuText onPress={() => navigation.navigate('Animals')}>
          Animais
        </MenuText>
      </MenuIcon>

      <MenuIcon>
        <Icon name="map" size={20} color="#fff" />
        <MenuText onPress={() => navigation.navigate('Map')}>Mapa</MenuText>
      </MenuIcon>

      <MenuIcon>
        <Image source={Animais} style={{ width: 20, height: 20 }} />
        <MenuText onPress={() => navigation.navigate('Threatened')}>
          Ameaçados
        </MenuText>
      </MenuIcon>
    </Container>
  );
}
