import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';

import Header from '~/components/Header';

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
    </>
  );
}
