import React from 'react';

import { StatusBar } from 'react-native';
import { Wrapper, Container, TextThreatened } from './styles';

import HeaderThreatened from '~/components/HeaderThreatened';
import FooterThreatened from '~/components/FooterThreatened';

import { useTitle } from '~/context/title';

export default function Threatened({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Animais Ameaçados`);
  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#D43C3C" />
      <HeaderThreatened />
      <Container>
        <TextThreatened>Animais Ameaçados</TextThreatened>
      </Container>
      <FooterThreatened navigation={navigation} />
    </Wrapper>
  );
}
