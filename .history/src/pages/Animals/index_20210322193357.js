import React from 'react';

import { useTitle } from '~/context/title';

import { Container, TextSpecies } from './styles';

import Header from '~/components/Header';

export default function Animals({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Animais`);
  return (
    <>
      <Header />
      <Container>
        <TextSpecies onPress={() => navigation.navigate('Species')}>
          Espécies
        </TextSpecies>
      </Container>
    </>
  );
}
