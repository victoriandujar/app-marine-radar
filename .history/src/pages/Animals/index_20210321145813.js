import React from 'react';

import { useTitle } from '~/context/title';

import { Container, TextSpecies } from './styles';

export default function Animals({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Animais`);
  return (
    <>
      <Container>
        <TextSpecies onPress={() => navigation.navigate('Species')}>
          Espécies
        </TextSpecies>
      </Container>
    </>
  );
}
