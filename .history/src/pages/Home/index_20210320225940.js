import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';

import Header from '../../components/Header';

export default function Home({ navigation }) {
  return (
    <Container>
      <Header />
    </Container>
  );
}
