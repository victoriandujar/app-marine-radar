import React from 'react';

import { StatusBar, Text } from 'react-native';
import { Wrapper, Container, TitleThreatened } from './styles';

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
        <TitleThreatened>
          <Text>Ranking</Text>
          <Text>Ameaçados de Extinção</Text>
        </TitleThreatened>
      </Container>
      <FooterThreatened navigation={navigation} />
    </Wrapper>
  );
}
