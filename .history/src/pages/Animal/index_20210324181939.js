import React from 'react';

import { StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  ImageAnimal,
  ContainerAnimal,
  HeaderAnimal,
  BackButton,
} from './styles';

import Footer from '~/components/Footer';

import Orca from '../../assets/Animais/Baleia/Orca.png';
import Logo from '../../assets/Logo/Logo.png';
import Navbar from '../../assets/Logo/Navbar.png';

Icon.loadFont();
export default function Animal({ navigation }) {
  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Container>
        <ContainerAnimal>
          <ImageAnimal source={Orca} />
          <HeaderAnimal>
            <Image source={Navbar} style={{ width: 20 }} resizeMode="contain" />
            <Image source={Logo} style={{ width: 25 }} resizeMode="contain" />
          </HeaderAnimal>
          {/* <BackButton>
            <Icon name="east" size={14} color="#25C1AF" />
          </BackButton> */}
        </ContainerAnimal>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
