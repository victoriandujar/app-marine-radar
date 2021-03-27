import React from 'react';

import Header from '../../components/Header';

import { useTitle } from '~/context/title';

import { Container, TextAnimals } from './styles';

export default function Animals({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Animais`);
  return (
    <>
      <Header />
      <Container>
        <TextAnimals onPress={() => navigation.navigate('Species')}>
          Espécies
        </TextAnimals>
      </Container>
    </>
  );
}
