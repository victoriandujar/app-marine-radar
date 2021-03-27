import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
import Animals from '~/pages/Animals';
import Species from '~/pages/Species';
import Animal from '~/pages/Animal';

export default () =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        Explore,
        Home,
        Animals,
        Species,
        Animal,
      }),
    })
  );
