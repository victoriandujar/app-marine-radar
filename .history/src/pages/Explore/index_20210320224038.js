import React from 'react';

import { Image } from 'react-native';
import logo from '~/assets/torulog.png';

import { Container, SignLink, SignLinkText } from './styles';

export default function Explore({ navigation }) {
  return (
    <>
      <Container>
        <Image source={logo} style={{ maxWidth: 200, maxHeight: 200 }} />

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </>
  );
}
