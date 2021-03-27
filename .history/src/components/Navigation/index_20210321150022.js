import React from 'react';

import { SafeAreaView } from 'react-native';

import Header from './Header/index';
import Footer from './Footer/index';

import { Container } from './styles';

export default function Navigation() {
  return (
    <SafeAreaView>
      <Container>
        <Header />
        <Footer />
      </Container>
    </SafeAreaView>
  );
}
