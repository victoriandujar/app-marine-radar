import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';

import logo from '~/assets/torulog.png';

import { Container, SignLink, SignLinkText } from './styles';

import Header from '../../components/Header';

export default function Home({ navigation }) {
  return (
    <Container>
      <Header />
    </Container>
  );
}
