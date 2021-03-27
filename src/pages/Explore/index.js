import React from 'react';

import { Image, StatusBar } from 'react-native';
import Img_Home from '../../assets/Home/Img_Home.png';

import Logo from '../../assets/Logo/Logo.png';

import {
  Container,
  Content,
  WelcomeText,
  ContentLogo,
  TextLogo,
  SignLink,
  SignLinkText,
} from './styles';

export default function Explore({ navigation }) {
  return (
    <>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Container>
        <Image source={Img_Home} />
      </Container>

      <Content>
        <WelcomeText>Olá, Seja Bem-Vindo</WelcomeText>
        <ContentLogo>
          <Image source={Logo} style={{ maxWidth: 200, maxHeight: 200 }} />
          <TextLogo>Marine Radar</TextLogo>
        </ContentLogo>

        <SignLink onPress={() => navigation.navigate('Home')}>
          <SignLinkText>Explorar</SignLinkText>
        </SignLink>
      </Content>
    </>
  );
}
