import React from 'react';

import { StatusBar, Image } from 'react-native';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import Img_Home2 from '../../assets/Home/Img_Home2.png';

import {
  Wrapper,
  Container,
  TextAnimals,
  ImageAnimals,
  ContainerAnimals,
} from './styles';

import { useTitle } from '~/context/title';

export default function Home({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Explorar`);

  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <ContainerAnimals>
          <Image source={Img_Home2} />
          <TextAnimals>Ver todos</TextAnimals>
        </ContainerAnimals>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
