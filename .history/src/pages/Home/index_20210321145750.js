import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';

import { Container, TextAnimals, TextMapa, TextAmeacados } from './styles';

import { useTitle } from '~/context/title';

export default function Home({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Explorar`);

  return (
    <>
      <Container>
        <TextAnimals onPress={() => navigation.navigate('Animals')}>
          Animais
        </TextAnimals>
        <TextMapa>Mapa</TextMapa>
        <TextAmeacados>Ameaçados</TextAmeacados>
      </Container>
    </>
  );
}
