import React from 'react';

import { StatusBar } from 'react-native';
import { Wrapper, Container, TextInstitutions } from './styles';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { useTitle } from '~/context/title';

export default function MapInstitutions({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Mapa - Instituições`);
  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <TextInstitutions>Mapa de Instituições</TextInstitutions>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
