import React from 'react';

import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header';

import Img_Home2 from '../../assets/Home/Img_Home2.png';
import Img_Home3 from '../../assets/Home/Img_Home3.png';
import Img_Home4 from '../../assets/Home/Img_Home4.png';

import {
  Wrapper,
  Container,
  Title,
  Subtitle,
  TextAnimals,
  ImageAnimals,
  ContainerAnimals,
  LinkAnimals,
  ButtonAnimals,
  ContainerSections,
  ContainerMap,
  ImageMap,
} from './styles';

import { useTitle } from '~/context/title';

Icon.loadFont();

export default function Home({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Home`);

  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <Title>Animais</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing</Subtitle>

        <ContainerAnimals>
          <ImageAnimals source={Img_Home2} />

          <LinkAnimals>
            <TextAnimals onPress={() => navigation.navigate('Animals')}>
              Ver todos
            </TextAnimals>
            <ButtonAnimals onPress={() => navigation.navigate('Animals')}>
              <Icon name="east" size={14} color="#25C1AF" />
            </ButtonAnimals>
          </LinkAnimals>
        </ContainerAnimals>

        <Title>Descubra</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing</Subtitle>

        <ContainerSections>
          <ContainerMap>
            <ImageMap source={Img_Home3} resizeMode="cover" />

            <LinkAnimals>
              <TextAnimals
                style={{ fontSize: 12 }}
                onPress={() => navigation.navigate('Mapa')}
              >
                Mapa
              </TextAnimals>
              <ButtonAnimals
                style={{ padding: 2 }}
                onPress={() => navigation.navigate('Mapa')}
              >
                <Icon name="east" size={12} color="#25C1AF" />
              </ButtonAnimals>
            </LinkAnimals>
          </ContainerMap>
          <ContainerMap>
            <ImageMap source={Img_Home4} resizeMode="cover" />

            <LinkAnimals>
              <TextAnimals
                style={{ fontSize: 12 }}
                onPress={() => navigation.navigate('Threatened')}
              >
                Amea??ados
              </TextAnimals>
              <ButtonAnimals
                style={{ padding: 2 }}
                onPress={() => navigation.navigate('Threatened')}
              >
                <Icon name="east" size={12} color="#25C1AF" />
              </ButtonAnimals>
            </LinkAnimals>
          </ContainerMap>
        </ContainerSections>
      </Container>
    </Wrapper>
  );
}
