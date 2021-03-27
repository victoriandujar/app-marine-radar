import React from 'react';

import { StatusBar, Text } from 'react-native';
import {
  Wrapper,
  Container,
  ContainerThreatened,
  ImageThreatened,
} from './styles';

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
        <Text style={{ color: '#555454' }}>Ranking</Text>
        <Text style={{ color: '#555454', fontSize: 22, fontWeight: 'bold' }}>
          Ameaçados de Extinção
        </Text>
      </Container>
      <FooterThreatened navigation={navigation} />
    </Wrapper>
  );
}
