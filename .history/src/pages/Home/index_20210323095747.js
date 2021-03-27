import React from 'react';

import { StatusBar } from 'react-native';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import {
  Wrapper,
  Container,
  TextAnimals,
  TextMapa,
  TextAmeacados,
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
          <TextAnimals>Ver todos</TextAnimals>
        </ContainerAnimals>
        <TextMapa onPress={() => navigation.navigate('Map')}>Mapa</TextMapa>
        <TextAmeacados onPress={() => navigation.navigate('Threatened')}>
          Ameaçados
        </TextAmeacados>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
