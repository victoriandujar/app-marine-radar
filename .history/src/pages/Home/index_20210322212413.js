import React from 'react';

import { StatusBar } from 'react-native';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { Container, TextAnimals, TextMapa, TextAmeacados } from './styles';

import { useTitle } from '~/context/title';

export default function Home({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Explorar`);

  return (
    <>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <TextAnimals onPress={() => navigation.navigate('Animals')}>
          Animais
        </TextAnimals>
        <TextMapa onPress={() => navigation.navigate('Map')}>Mapa</TextMapa>
        <TextAmeacados onPress={() => navigation.navigate('Threatened')}>
          Ameaçados
        </TextAmeacados>
      </Container>
      <Footer navigation={navigation} />
    </>
  );
}
