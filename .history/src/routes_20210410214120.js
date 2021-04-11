import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Explore from './pages/Explore';
import Home from './pages/Home';
import Animals from './pages/Animals';
import Whales from './pages/Species/Whales';
import Animal from './pages/Animal';
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
        Animal,
        Map,
        MapAnimals,
        MapInstitutions,
        Threatened,
        AnimalThreatened,
      }),
    })
  );
