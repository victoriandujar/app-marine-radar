import React from 'react';

import { StatusBar } from 'react-native';
import { Container, TextMap } from './styles';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { useTitle } from '~/context/title';

export default function Map({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Seção - Mapas`);

  return (
    <>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <TextMap onPress={() => navigation.navigate('MapAnimals')}>
          Mapa de Animais
        </TextMap>
        <TextMap onPress={() => navigation.navigate('MapInstitutions')}>
          Mapa de Instituições
        </TextMap>
      </Container>
      <Footer navigation={navigation} />
    </>
  );
}
