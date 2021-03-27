import React from 'react';

import Header from '../../components/Header';

import { useTitle } from '~/context/title';

export default function Animals() {
  const { setTitle } = useTitle('');
  setTitle(`Animais`);
  return (
    <>
      <Header />
    </>
  );
}
