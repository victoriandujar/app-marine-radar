import React from 'react';

import createRouter from '~/routes';
import NavigationService from '~/services/navigation';

import PageProvider from '~/context/title';

import Navigation from '~/components/Navigation';

export default function App() {
  const Routes = createRouter();
  return (
    <PageProvider>
      <Routes ref={(ref) => NavigationService.setNavigator(ref)} />
      <Navigation />
    </PageProvider>
  );
}
