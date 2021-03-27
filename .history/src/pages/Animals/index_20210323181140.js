import React from 'react';

import { StatusBar } from 'react-native';
import { useTitle } from '~/context/title';

import { Wrapper, Container, Title, Filter, TextFilter } from './styles';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function Animals({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Animais`);
  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <Title>Animais</Title>
        <Filter>
          <TextFilter>Todos</TextFilter>
          <TextFilter>Por Família</TextFilter>
        </Filter>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
