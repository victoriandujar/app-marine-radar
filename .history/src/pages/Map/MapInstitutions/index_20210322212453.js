import React from 'react';

import { Container, TextInstitutions } from './styles';

import Header from '~/components/Header';

import { useTitle } from '~/context/title';

export default function MapInstitutions() {
  const { setTitle } = useTitle('');
  setTitle(`Mapa - Instituições`);
  return (
    <>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <TextInstitutions>Mapa de Instituições</TextInstitutions>
      </Container>
    </>
  );
}
