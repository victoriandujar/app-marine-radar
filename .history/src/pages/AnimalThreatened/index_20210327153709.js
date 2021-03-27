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
                  fontSize: 16,
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
                A Orca (Orcinus orca) é o membro da família dos golfinhos de
                maior porte e é um superpredador versátil, que inclui na sua
                dieta presas como peixes, moluscos, aves, tartarugas, focas,
                tubarões e animais de tamanho maior quando caçam em grupo, como
                por exemplo baleias. É o segundo mamífero de maior área de
                distribuição geográfica, é encontrada em todos os oceanos e pode
                chegar a pesar nove toneladas.
              </TextAboutAnimal>
            </ContainerAboutAnimal>
          </BackgroundText>
        </ContainerAnimal>
      </Container>
      <FooterThreatened navigation={navigation} />
    </Wrapper>
  );
}
