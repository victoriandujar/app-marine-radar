import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'react-native';

import App from './App';

export default function Index() {
  return (
    <>
      <StatusBar barSyle="light-content" backgroundColor="#0671e1" />

      <App />
    </>
  );
}
