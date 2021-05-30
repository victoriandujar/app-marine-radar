import React from 'react';

import { StatusBar, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  ContainerThreatened,
  ImageThreatened,
  TextThreatened,
  ButtonThreatened,
} from './styles';

import HeaderThreatened from '../../components/HeaderThreatened';
import FooterThreatened from '../../components/FooterThreatened';

import BaleiaAmeacada from '../../assets/Ameaçados/baleia.png';
import TubaraoBrancoAmeacado from '../../assets/Ameaçados/Branco.png';
import TubaraoBaleiaAmeacado from '../../assets/Ameaçados/TBaleia.png';
import TubarãoFradeAmeaçado from '../../assets/Ameaçados/TFrade.png';
import TartarugaPenteAmeaçada from '../../assets/Ameaçados/TartarugaPente.png';
import TartarugaCouroAmeaçada from '../../assets/Ameaçados/TartarugaCouro.png';
import VaquitaAmeaçada from '../../assets/Ameaçados/Vaquita.png';
import TubaraoMarteloAmeaçado from '../../assets/Ameaçados/TMartelo.png';
import PinguimImperadorAmeaçado from '../../assets/Ameaçados/Pinguim.png';

import { useTitle } from '../../context/title';

Icon.loadFont();

export default function Threatened({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Animais Ameaçados`);
  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#D43C3C" />
      <HeaderThreatened />
      <ScrollView>
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
              <ButtonThreatened
                onPress={() => navigation.navigate('AnimalThreatened')}
              >
                <Icon name="east" size={14} color="#d43c3c" />
              </ButtonThreatened>
            </TextThreatened>
          </ContainerThreatened>

          <ContainerThreatened>
            <ImageThreatened source={TubaraoBrancoAmeacado} />
            <TextThreatened>
              <Text style={{ color: '#fff' }}>Carcharodon carcharias</Text>
              <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>
                Tubarão Branco
              </Text>
              <ButtonThreatened
                onPress={() => navigation.navigate('AnimalThreatened')}
              >
                <Icon name="east" size={14} color="#d43c3c" />
              </ButtonThreatened>
            </TextThreatened>
          </ContainerThreatened>

          <ContainerThreatened>
            <ImageThreatened source={TubaraoBaleiaAmeacado} />
            <TextThreatened>
              <Text style={{ color: '#fff' }}>Carcharodon carcharias</Text>
              <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>
                Tubarão Baleia
              </Text>
              <ButtonThreatened
                onPress={() => navigation.navigate('AnimalThreatened')}
              >
                <Icon name="east" size={14} color="#d43c3c" />
              </ButtonThreatened>
            </TextThreatened>
          </ContainerThreatened>

          <ContainerThreatened>
            <ImageThreatened source={TubarãoFradeAmeaçado} />
            <TextThreatened>
              <Text style={{ color: '#fff' }}>Cetorhinus maximus</Text>
              <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>
                Tubarão Frade
              </Text>
              <ButtonThreatened
                onPress={() => navigation.navigate('AnimalThreatened')}
              >
                <Icon name="east" size={14} color="#d43c3c" />
              </ButtonThreatened>
            </TextThreatened>
          </ContainerThreatened>

          <ContainerThreatened>
            <ImageThreatened source={TartarugaPenteAmeaçada} />
            <TextThreatened>
              <Text style={{ color: '#fff' }}>Eretmochelys imbricata</Text>
              <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>
                Tubarão de Pente
              </Text>
              <ButtonThreatened
                onPress={() => navigation.navigate('AnimalThreatened')}
              >
                <Icon name="east" size={14} color="#d43c3c" />
              </ButtonThreatened>
            </TextThreatened>
          </ContainerThreatened>

          <ContainerThreatened>
            <ImageThreatened source={TartarugaCouroAmeaçada} />
            <TextThreatened>
              <Text style={{ color: '#fff' }}>Dermochelys coriacea</Text>
              <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>
                Tubarão de Couro
              </Text>
              <ButtonThreatened
                onPress={() => navigation.navigate('AnimalThreatened')}
              >
                <Icon name="east" size={14} color="#d43c3c" />
              </ButtonThreatened>
            </TextThreatened>
          </ContainerThreatened>

          <ContainerThreatened>
            <ImageThreatened source={VaquitaAmeaçada} />
            <TextThreatened>
              <Text style={{ color: '#fff' }}>Phocoena sinus</Text>
              <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>
                Vaquita
              </Text>
              <ButtonThreatened
                onPress={() => navigation.navigate('AnimalThreatened')}
              >
                <Icon name="east" size={14} color="#d43c3c" />
              </ButtonThreatened>
            </TextThreatened>
          </ContainerThreatened>

          <ContainerThreatened>
            <ImageThreatened source={TubaraoMarteloAmeaçado} />
            <TextThreatened>
              <Text style={{ color: '#fff' }}>Sphyrna mokarran</Text>
              <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>
                Tubarão Martelo
              </Text>
              <ButtonThreatened
                onPress={() => navigation.navigate('AnimalThreatened')}
              >
                <Icon name="east" size={14} color="#d43c3c" />
              </ButtonThreatened>
            </TextThreatened>
          </ContainerThreatened>

          <ContainerThreatened>
            <ImageThreatened source={PinguimImperadorAmeaçado} />
            <TextThreatened>
              <Text style={{ color: '#fff' }}>Aptenodytes forsteri</Text>
              <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>
                Pinguim Imperador
              </Text>
              <ButtonThreatened
                onPress={() => navigation.navigate('AnimalThreatened')}
              >
                <Icon name="east" size={14} color="#d43c3c" />
              </ButtonThreatened>
            </TextThreatened>
          </ContainerThreatened>
        </Container>
      </ScrollView>
      <FooterThreatened navigation={navigation} />
    </Wrapper>
  );
}
