import React from 'react';

import { StatusBar } from 'react-native';
import { useTitle } from '~/context/title';

import { Wrapper, Container, TextSpecies, Content } from './styles';

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
        <Content>
          <TextSpecies>Teste</TextSpecies>
        </Content>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
