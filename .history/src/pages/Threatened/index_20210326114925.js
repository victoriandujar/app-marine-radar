import React from 'react';

import { StatusBar, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  ContainerThreatened,
  ImageThreatened,
  TextThreatened,
  ButtonThreatened,
} from './styles';

import HeaderThreatened from '~/components/HeaderThreatened';
import FooterThreatened from '~/components/FooterThreatened';

import BaleiaAmeacada from '../../assets/Ameaçados/baleia.png';

import { useTitle } from '~/context/title';

Icon.loadFont();

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

        <ContainerThreatened>
          <ImageThreatened source={BaleiaAmeacada} />
          <TextThreatened>
            <Text style={{ color: '#fff' }}>Balaenoptera musculus</Text>
            <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>
              Baleia Azul
            </Text>
          </TextThreatened>
          <ButtonThreatened />
        </ContainerThreatened>
      </Container>
      <FooterThreatened navigation={navigation} />
    </Wrapper>
  );
}
