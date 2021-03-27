import React from 'react';

import { StatusBar, Image, StyleSheet } from 'react-native';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import Img_Home2 from '../../assets/Home/Img_Home2.png';

import {
  Wrapper,
  Container,
  TextAnimals,
  TextMapa,
  TextAmeacados,
  ContainerAnimals,
} from './styles';

import { useTitle } from '~/context/title';

export default function Home({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Explorar`);

  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <ContainerAnimals style={styles.container}>
          <Image
            source={Img_Home2}
            resizeMode="stretch"
            style={styles.backgroundImage}
          />
          <TextAnimals>Ver todos</TextAnimals>
        </ContainerAnimals>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  fotoDePerfil: {
    width: 120,
    height: 120,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 5,
  },
});
