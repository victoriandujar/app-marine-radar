import React from 'react';

import createRouter from '~/routes';
import NavigationService from '~/services/navigation';

export default function App() {
  const Routes = createRouter();
  return <Routes ref={(ref) => NavigationService.setNavigator(ref)} />;
}
