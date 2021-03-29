import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Wrapper, TextInstitutions, ViewMapaInstitutions, ViewTextMapaInstitutions } from './styles';
import MapView, { Marker } from 'react-native-maps'

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { useTitle } from '../../../context/title';

export default function MapInstitutions({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Mapa - Instituições`);
  return (
<Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Wrapper>
        <ViewTextMapaInstitutions>
          <TextInstitutions>Mapa de Instituições</TextInstitutions>
        </ViewTextMapaInstitutions>
        <ViewMapaInstitutions>
          <MapView
            initialRegion= {{
              latitude: -23.5475000,
              longitude: -46.6361100,
              latitudeDelta: 0.0042,
              longitudeDelta: 0.0031,
            }}
            style={styles.mapView}
          />
        </ViewMapaInstitutions>
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