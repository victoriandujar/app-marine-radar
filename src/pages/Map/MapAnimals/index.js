import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Wrapper, TextMapAnimals, ViewMapaAnimais, ViewTextMapaAnimais } from './styles';
import MapView, { Marker } from 'react-native-maps'

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { useTitle } from '../../../context/title';

export default function MapAnimals({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Mapa - Avistamentos`);

  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Wrapper>
        <ViewTextMapaAnimais>
          <TextMapAnimals>Mapa Avistamentos</TextMapAnimals>
        </ViewTextMapaAnimais>
        <ViewMapaAnimais>
          <MapView
            initialRegion= {{
              latitude: -23.5475000,
              longitude: -46.6361100,
              latitudeDelta: 0.0042,
              longitudeDelta: 0.0031,
            }}
            style={styles.mapView}
          />
        </ViewMapaAnimais>
      </Wrapper>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})