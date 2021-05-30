import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import {
  Wrapper,
  TextInstitutions,
  ViewMapaInstitutions,
  ViewTextMapaInstitutions,
} from './styles';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { useTitle } from '../../../context/title';

export default function MapInstitutions({ navigation }) {
  const { setTitle } = useTitle('');
  const [latitude] = useState(-23.417315012544513);
  const [longitude] = useState(-45.034153271557564);
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
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0042,
              longitudeDelta: 0.0031,
            }}
            style={styles.mapView}
            rotateEnabled
            scrollEnabled
            zoomEnable
            showsPointsOfInterest={false}
            showsBuildings={false}
          >
            <MapView.Marker
              coordinate={{
                latitude: -23.417315012544513,
                longitude: -45.034153271557564,
              }}
              title="Instituto Agronauta"
              description="Instituto Agronauta Ubatuba"
              icon={require('../../../assets/Icons/Local.png')}
            />

            <MapView.Marker
              coordinate={{
                latitude: -23.817841418625456,
                longitude: -45.37622452330835,
              }}
              title="Instituto Viva Verde e Azul"
              description="Instituto Viva Verde e Azul"
              icon={require('../../../assets/Icons/Local.png')}
            />

            <MapView.Marker
              coordinate={{
                latitude: -24.105439917538927,
                longitude: -46.788871671254995,
              }}
              title="Instituto Gremar Itanhaem"
              description="Instituto Gremar Itanhaem"
              icon={require('../../../assets/Icons/Local.png')}
            />
          </MapView>
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
  },
});
