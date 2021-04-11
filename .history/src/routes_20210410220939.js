import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Explore from './pages/Explore';
import Home from './pages/Home';
import Animals from './pages/Animals';

import Whales from './pages/Species/Whales';
import Sharks from './pages/Species/Sharks';
import Ray from './pages/Species/Ray';

import Orca from './pages/Animal/Whales/Orca';
import Minke from './pages/Animal/Whales/Minke';

import Map from './pages/Map';
import MapInstitutions from './pages/Map/MapInstitutions';
import MapAnimals from './pages/Map/MapAnimals';

import Threatened from './pages/Threatened';
import AnimalThreatened from './pages/AnimalThreatened';

export default () =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        Explore,
        Home,
        Animals,

        Whales,
        Sharks,
        Ray,

        Orca,
        Minke,

        Map,
        MapAnimals,
        MapInstitutions,

        Threatened,
        AnimalThreatened,
      }),
    })
  );
