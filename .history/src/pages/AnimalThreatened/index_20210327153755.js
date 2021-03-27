import React from 'react';

import { StatusBar, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  ImageAnimal,
  ContainerAnimal,
  HeaderAnimal,
  BackButton,
  BackgroundText,
  TitleAnimal,
  ContainerTitle,
  ContainerPlace,
  ContainerAboutAnimal,
  TextAboutAnimal,
} from './styles';

import FooterThreatened from '~/components/FooterThreatened';

import BaleiaAzul from '../../assets/Ameaçados/baleia_azul.png';
import Logo from '../../assets/Logo/Logo.png';
import Navbar from '../../assets/Logo/Navbar.png';

export default function AnimalThreatened({ navigation }) {
  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#d43c3c" />
      <Container>
        <ContainerAnimal>
          <ImageAnimal source={BaleiaAzul} />
          <HeaderAnimal>
            <Image source={Navbar} style={{ width: 20 }} resizeMode="contain" />
            <Image source={Logo} style={{ width: 25 }} resizeMode="contain" />
          </HeaderAnimal>
          <BackButton>
            <Icon name="east" size={14} color="#d43c3c" />
          </BackButton>

          <BackgroundText>
            <ContainerTitle>
              <TitleAnimal>Baleia Azul</TitleAnimal>
              <TitleAnimal
                style={{
                  fontWeight: 'normal',
                  marginLeft: 5,
                  fontSize: 14,
                }}
              >
                - Balaenoptera musculus
              </TitleAnimal>
            </ContainerTitle>

            <ContainerPlace>
              <Icon name="place" size={18} color="#d43c3c" />
              <Text style={{ color: '#d43c3c', fontSize: 12 }}>
                Oceano Pacífico, Atlântido, Índico e Antártico
              </Text>
            </ContainerPlace>

            <ContainerAboutAnimal>
              <TextAboutAnimal>
                Considerada o maior animal do planeta, existem pelo menos três
                subespécies de baleia-azul Balenoptera musculus que vivem nos
                mares da Antártica e nos oceanos Índico, Pacífico e Atlântico. A
                IUCN (International Unior for Conservation of Nature),
                classifica a baleia-azul como “em perigo” o que significa que
                esses seres correm sério risco de extinção. Atualmente, as
                estimativas globais dão conta de 10.000-25.000 indivíduos dessa
                espécie, correspondente a aproximadamente 3-11% da sua população
                em 1911.
              </TextAboutAnimal>
            </ContainerAboutAnimal>
          </BackgroundText>
        </ContainerAnimal>
      </Container>
      <FooterThreatened navigation={navigation} />
    </Wrapper>
  );
}
