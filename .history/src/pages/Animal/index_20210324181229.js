import React from 'react';

import { StatusBar } from 'react-native';
import { Wrapper, Container, ImageAnimal, ContainerAnimal } from './styles';

import Footer from '~/components/Footer';

import Orca from '../../assets/Animais/Baleia/Orca.png';

export default function Animal({ navigation }) {
  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Container>
        <ContainerAnimal>
          <ImageAnimal source={Orca} />
        </ContainerAnimal>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
