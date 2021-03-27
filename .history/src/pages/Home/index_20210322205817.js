import React from 'react';

import Header from '~/components/Header';
import Footer from '~/pages/Footer';

import { Container, TextAnimals, TextMapa, TextAmeacados } from './styles';

import { useTitle } from '~/context/title';

export default function Home({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Explorar`);

  return (
    <>
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
      <Footer />
    </>
  );
}
