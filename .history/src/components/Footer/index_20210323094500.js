import React from 'react';

import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, MenuIcon, MenuText } from './styles';

import Animais from '../../assets/Menu/baleia.png';

export default function Footer({ navigation }) {
  return (
    <Container>
      <MenuIcon>
        <Icon name="house-usere" size={22} color="#fff" />
        <MenuText onPress={() => navigation.navigate('Home')}>Home</MenuText>
      </MenuIcon>

      <MenuIcon>
        <Image source={Animais} style={{ width: 22, height: 22 }} />
        <MenuText onPress={() => navigation.navigate('Animals')}>
          Animais
        </MenuText>
      </MenuIcon>

      <MenuIcon>
        <Image source={Animais} style={{ width: 22, height: 22 }} />
        <MenuText onPress={() => navigation.navigate('Map')}>Mapa</MenuText>
      </MenuIcon>

      <MenuIcon>
        <Image source={Animais} style={{ width: 22, height: 22 }} />
        <MenuText onPress={() => navigation.navigate('Threatened')}>
          Ameaçados
        </MenuText>
      </MenuIcon>
    </Container>
  );
}
