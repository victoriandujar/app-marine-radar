import React from 'react';

import { StatusBar } from 'react-native';
import {
  Wrapper,
  Container,
  TopContainer,
  Title,
  Filter,
  TextFilter,
} from './styles';

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
        <TopContainer>
          <Title>Animais</Title>
          <Filter>
            <TextFilter style={{ color: '#0a4bf1', fontWeight: 'bold' }}>
              Todos
            </TextFilter>
            <TextFilter>Por Família</TextFilter>
          </Filter>
        </TopContainer>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
