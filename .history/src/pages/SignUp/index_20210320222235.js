import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';

import logo from '~/assets/torulog.png';

import { Container } from './styles';

export default function SignUp() {
  return (
    <Container>
      <Image source={logo} style={{ maxWidth: 150, maxHeight: 150, top: 20 }} />
    </Container>
  );
}
