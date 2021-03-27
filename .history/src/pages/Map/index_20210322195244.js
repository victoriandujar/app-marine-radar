import React from 'react';

import { View } from 'react-native';

import MapAnimals from './MapAnimals';
import MapInstitutions from './MapInstitutions';

export default function Map() {
  return (
    <View>
      <MapAnimals />
      <MapInstitutions />
    </View>
  );
}
