import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTitle } from '~/context/title';

import {
  Wrapper,
  Container,
  TopContainer,
  Title,
  Filter,
  TextFilter,
  ContainerWhales,
  ImageWhales,
  ContentWhales,
  TextWhales,
  TextWhalesClass,
  ButtonWhales,
} from './styles';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import Whales from '~/assets/Animais/Baleia/Baleias.png';

export default function Animals({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Animais`);
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

        <ContainerWhales>
          <ImageWhales source={Whales} />
          <ContentWhales>
            <TextWhalesClass>Mysticeti</TextWhalesClass>
            <TextWhales>Baleia</TextWhales>
            <ButtonWhales>
              <Icon name="east" size={14} color="#25C1AF" />
            </ButtonWhales>
          </ContentWhales>
        </ContainerWhales>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
