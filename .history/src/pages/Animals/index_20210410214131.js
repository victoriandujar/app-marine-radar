import React from 'react';

import { StatusBar, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTitle } from '../../context/title';

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

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Whales from '../../assets/Animais/Baleia/Baleias.png';
import Shark from '../../assets/Animais/Baleia/Tubarao.png';
import Ray from '../../assets/Animais/Baleia/Arraia.png';

Icon.loadFont();

export default function Animals({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Animais`);
  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <ScrollView>
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
              <TextWhales onPress={() => navigation.navigate('Species')}>
                Baleia
              </TextWhales>
              <ButtonWhales onPress={() => navigation.navigate('Species')}>
                <Icon name="east" size={14} color="#25C1AF" />
              </ButtonWhales>
            </ContentWhales>
          </ContainerWhales>

          <ContainerWhales>
            <ImageWhales source={Shark} />
            <ContentWhales>
              <TextWhalesClass>Selachimorpha</TextWhalesClass>
              <TextWhales onPress={() => navigation.navigate('Species')}>
                Tubarão
              </TextWhales>
              <ButtonWhales onPress={() => navigation.navigate('Species')}>
                <Icon name="east" size={14} color="#25C1AF" />
              </ButtonWhales>
            </ContentWhales>
          </ContainerWhales>

          <ContainerWhales>
            <ImageWhales source={Ray} />
            <ContentWhales>
              <TextWhalesClass>Batoidea</TextWhalesClass>
              <TextWhales onPress={() => navigation.navigate('Whales')}>
                Arraia
              </TextWhales>
              <ButtonWhales onPress={() => navigation.navigate('Whales')}>
                <Icon name="east" size={14} color="#25C1AF" />
              </ButtonWhales>
            </ContentWhales>
          </ContainerWhales>
        </Container>
      </ScrollView>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
