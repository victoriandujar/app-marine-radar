import React from 'react';

import { StatusBar } from 'react-native';
import { Container, TextThreatened } from './styles';

import HeaderThreatened from '~/components/HeaderThreatened';

import { useTitle } from '~/context/title';

export default function Threatened() {
  const { setTitle } = useTitle('');
  setTitle(`Animais Ameaçados`);
  return (
    <>
      <StatusBar barSyle="light-content" backgroundColor="#D43C3C" />
      <HeaderThreatened />
      <Container>
        <TextThreatened>Animais Ameaçados</TextThreatened>
      </Container>
    </>
  );
}
