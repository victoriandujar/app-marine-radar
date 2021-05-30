import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import {
  Wrapper,
  TextMapAnimals,
  ViewMapaAnimais,
  ViewTextMapaAnimais,
} from './styles';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { useTitle } from '../../../context/title';

import api from '../../../services/api';

export default function MapAnimals({ navigation }) {
  const [species, setSpecies] = useState([]);
  const [latitude, setLatitude] = useState(48.4144333394702);
  const [longitude, setLongitude] = useState(-123.36306758092356);
  useEffect(() => {
    async function loadSpecies() {
      const response = await api.get('/api.json');
      const { data } = response;
      setSpecies(data);
      console.log(data);
      // console.warn(data);
    }
    loadSpecies();
  }, []);

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
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.mapView}
            rotateEnabled={false}
            showsPointsOfInterest={false}
            showsBuildings={false}
          >
            {species.map((localObservacao) => (
              <MapView.Marker
                key={localObservacao.id}
                coordinate={{
                  latitude: localObservacao.latitude,
                  longitude: localObservacao.longitude,
                }}
                title={`A espécie ${localObservacao.species} foi avistada no local!`}
                description={localObservacao.description}
                icon={require('../../../assets/Icons/baleia.png')}
              />
            ))}
          </MapView>
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
  },
});
