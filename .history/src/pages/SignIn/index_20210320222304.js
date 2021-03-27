import React, { useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import logo from '~/assets/torulog.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  return (
    <>
      <Container>
        <Image source={logo} style={{ maxWidth: 200, maxHeight: 200 }} />

          <SignLink onPress={() => navigation.navigate('SignUp')}>
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLin</Form>
      </Container>
    </>
  );
}
