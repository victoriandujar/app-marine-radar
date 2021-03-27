import React from 'react';

import { Container, TextThreatened } from './styles';

import HeaderThreatened from '~/components/HeaderThreatened';

import { useTitle } from '~/context/title';

export default function Threatened() {
  const { setTitle } = useTitle('');
  setTitle(`Animais Ameaçados`);
  return (
    <>
      <HeaderThreatened />
      <Container>
        <TextThreatened>Animais Ameaçados</TextThreatened>
      </Container>
    </>
  );
}
