import React from 'react';

import { Image } from 'react-native';
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
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Content>
    </>
  );
}
