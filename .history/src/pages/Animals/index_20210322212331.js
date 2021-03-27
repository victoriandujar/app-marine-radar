import React from 'react';

import { StatusBar } from 'react-native';
import { useTitle } from '~/context/title';

import { Container, TextSpecies } from './styles';

import Header from '~/components/Header';

export default function Animals({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Animais`);
  return (
    <>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <TextSpecies onPress={() => navigation.navigate('Species')}>
          Espécies
        </TextSpecies>
      </Container>
    </>
  );
}
