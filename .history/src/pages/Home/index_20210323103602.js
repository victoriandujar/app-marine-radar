import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import Img_Home2 from '../../assets/Home/Img_Home2.png';

import {
  Wrapper,
  Container,
  Title,
  Subtitle,
  TextAnimals,
  ImageAnimals,
  ContainerAnimals,
  LinkAnimals,
  ButtonAnimals,
} from './styles';

import { useTitle } from '~/context/title';

Icon.loadFont();

export default function Home({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Explorar`);

  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <Title>Animais</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing</Subtitle>

        <ContainerAnimals>
          <ImageAnimals source={Img_Home2} />

          <LinkAnimals>
            <TextAnimals>Ver todos</TextAnimals>
            <ButtonAnimals>
              <Icon name="east" size={14} color="#fff" />
            </ButtonAnimals>
          </LinkAnimals>
        </ContainerAnimals>

        <Title>Animais</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing</Subtitle>

        <Title>Animais</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing</Subtitle>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
