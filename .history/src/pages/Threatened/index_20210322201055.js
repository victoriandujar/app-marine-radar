import React from 'react';

import { Container, TextThreatened } from './styles';

import Header from '~/components/Header';

import { useTitle } from '~/context/title';

export default function Threatened() {
  const { setTitle } = useTitle('');
  setTitle(`Animais Ameaçados`);
  return (
    <>
      <Header />
      <Container>
        <TextThreatened>Animais Ameaçados</TextThreatened>
      </Container>
    </>
  );
}
