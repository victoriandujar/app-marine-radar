import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  SubTitleSpecies,
  LinkSpecies,
  ButtonSpecies,
} from '../Whales/styles';

import { useTitle } from '../../../context/title';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import BackgroundImg from '../../../assets/Animais/Baleia/Fundo.png';

Icon.loadFont();

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
            <SubTitleSpecies>Carcharodon carcharias</SubTitleSpecies>
            <LinkSpecies>
              <TextSpecies>Tubarão-branco</TextSpecies>
              <ButtonSpecies onPress={() => navigation.navigate('Orca')}>
                <Icon name="east" size={14} color="#25C1AF" />
              </ButtonSpecies>
            </LinkSpecies>
          </ContentSpecies>
        </ContainerSpecies>

        <ContainerSpecies>
          <Background source={BackgroundImg} />
          <ContentSpecies>
            <SubTitleSpecies>Sphyrnidae</SubTitleSpecies>
            <LinkSpecies>
              <TextSpecies>Tubarão-martelo</TextSpecies>
              <ButtonSpecies onPress={() => navigation.navigate('Animal')}>
                <Icon name="east" size={14} color="#25C1AF" />
              </ButtonSpecies>
            </LinkSpecies>
          </ContentSpecies>
        </ContainerSpecies>

        <ContainerSpecies>
          <Background source={BackgroundImg} />
          <ContentSpecies>
            <SubTitleSpecies>Galeocerdo cuvier</SubTitleSpecies>
            <LinkSpecies>
              <TextSpecies>Tubarão-tigre</TextSpecies>
              <ButtonSpecies onPress={() => navigation.navigate('Animal')}>
                <Icon name="east" size={14} color="#25C1AF" />
              </ButtonSpecies>
            </LinkSpecies>
          </ContentSpecies>
        </ContainerSpecies>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
