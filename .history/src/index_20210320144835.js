import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar barSyle="light-content" backgroundColor="#0671e1" />
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
