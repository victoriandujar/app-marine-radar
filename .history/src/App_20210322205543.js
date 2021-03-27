import React from 'react';

import createRouter from '~/routes';
import NavigationService from '~/services/navigation';

import PageProvider from '~/context/title';

import FooterMenu from './components/Footer';

export default function App() {
  const Routes = createRouter();
  return (
    <PageProvider>
      <FooterMenu />
      <Routes ref={(ref) => NavigationService.setNavigator(ref)} />
    </PageProvider>
  );
}
