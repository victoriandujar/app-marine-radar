import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';

import logo from '~/assets/torulog.png';

import { Container, SignLink, SignLinkText } from './styles';

export default function Home({ navigation }) {
  return (
    <Container>
      <Image source={logo} style={{ maxWidth: 150, maxHeight: 150, top: 20 }} />

      <SignLink onPress={() => navigation.navigate('Explore')}>
        <SignLinkText>Criar conta gratuita</SignLinkText>
      </SignLink>
    </Container>
  );
}
