import React from 'react';

import { SafeAreaView, Text } from 'react-native';

import Header from './Header';
import Footer from './Footer';

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
