import React from 'react';

import { StatusBar } from 'react-native';
import { Wrapper, Container, TextAnimal } from './styles';

import { useTitle } from '~/context/title';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function Especies({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle('Espécies - Baleias');

  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <TextAnimal onPress={() => navigation.navigate('Animal')}>
          Animal
        </TextAnimal>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
