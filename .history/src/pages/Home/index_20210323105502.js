import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';

import Img_Home2 from '../../assets/Home/Img_Home2.png';
import Img_Home3 from '../../assets/Home/Img_Home3.png';

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
  ContainerSections,
  ContainerMap,
  ImageMap,
  TextMap,
} from './styles';

import { useTitle } from '~/context/title';

Icon.loadFont();

export default function Home() {
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
              <Icon name="east" size={14} color="#25C1AF" />
            </ButtonAnimals>
          </LinkAnimals>
        </ContainerAnimals>

        <Title>Descubra</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing</Subtitle>

        <ContainerSections>
          <ContainerMap>
            <ImageMap source={Img_Home3} resizeMode="cover" />
          </ContainerMap>
          <ContainerMap>
            <ImageMap source={Img_Home3} resizeMode="cover" />
          </ContainerMap>
        </ContainerSections>
      </Container>
    </Wrapper>
  );
}
