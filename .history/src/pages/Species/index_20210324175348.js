import React from 'react';

import { StatusBar } from 'react-native';
import {
  Wrapper,
  Container,
  TopContainer,
  Title,
  Filter,
  TextFilter,
  ContainerSpecies,
  Background,
  ContentSpecies,
  TextSpecies,
} from './styles';

import { useTitle } from '~/context/title';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import BackgroundImg from '../../assets/Animais/Baleia/Fundo.png';

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

        <ContainerSpecies>
          <Background source={BackgroundImg} />
          <ContentSpecies>
            <TextSpecies>Orca</TextSpecies>
          </ContentSpecies>
        </ContainerSpecies>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
