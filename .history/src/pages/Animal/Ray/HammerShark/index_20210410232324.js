import React from 'react';

import { StatusBar, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  ImageAnimal,
  ContainerAnimal,
  HeaderAnimal,
  BackButton,
  BackgroundText,
  TitleAnimal,
  ContainerTitle,
  ContainerPlace,
  ContainerAboutAnimal,
  TextAboutAnimal,
} from './styles';

import Footer from '../../../../components/Footer';

import Thorns from '../../../../assets/Animais/Arraia/Espinhos.png';
import Logo from '../../../../assets/Logo/Logo.png';
import Navbar from '../../../../assets/Logo/Navbar.png';
// import api from '../../../../services/api';

Icon.loadFont();
export default function ThornsRay({ navigation }) {
  // const [animal, setAnimal] = useState([]);
  // useEffect(() => {
  //   async function loadAnimals() {
  //     const response = await api.get('/api.json');
  //     const { data } = response;
  //     setAnimal(data);
  //     // console.log(data);
  //     // console.warn(data);
  //   }
  //   loadAnimals();
  // }, []);
  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Container>
        <ContainerAnimal>
          <ImageAnimal source={Thorns} />
          <HeaderAnimal>
            <Image source={Navbar} style={{ width: 20 }} resizeMode="contain" />
            <Image source={Logo} style={{ width: 25 }} resizeMode="contain" />
          </HeaderAnimal>
          <BackButton>
            <Icon name="west" size={14} color="#25C1AF" />
          </BackButton>

          <BackgroundText>
            <ContainerTitle>
              <TitleAnimal>Arraia de Espinhos</TitleAnimal>
              <TitleAnimal
                style={{
                  fontWeight: 'normal',
                  marginLeft: 5,
                  fontSize: 16,
                }}
              >
                - Rhina ancylostoma
              </TitleAnimal>
            </ContainerTitle>

            <ContainerPlace>
              <Icon name="place" size={18} color="#25C1AF" />
              <Text style={{ color: '#25C1AF', fontSize: 12 }}>
                Todos os oceanos
              </Text>
            </ContainerPlace>

            <ContainerAboutAnimal>
              <TextAboutAnimal>
                Conhecida como raia-viola-de-espinhos ou raia-tubarão[1] (Rhina
                ancylostoma), é uma espécie de raia-viola que habita a região do
                Indo-Pacífico tropical.[2] É a única espécie conhecida que
                pertence ao gênero Rhina, e pertence á família Rhinidae.[3] É
                considerada uma espécie dócil para os humanos. Embora suas
                grandes nadadeiras dorsais e cauda forte o façam parecer um
                tubarão, ela é na verdade um tipo de raia, tanto que sempre é
                confundido com um tubarão.
              </TextAboutAnimal>
            </ContainerAboutAnimal>
          </BackgroundText>
        </ContainerAnimal>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
