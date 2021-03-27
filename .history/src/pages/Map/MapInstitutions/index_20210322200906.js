import React from 'react';

import { Container, TextInstitutions } from './styles';

import Header from '~/components/Header';

import { useTitle } from '~/context/title';

export default function MapInstitutions() {
  const { setTitle } = useTitle('');
  setTitle(`Mapa - Instituições`);
  return (
    <>
      <Header />
      <Text>Mapa de Instituições</Text>
    </>
  );
}
