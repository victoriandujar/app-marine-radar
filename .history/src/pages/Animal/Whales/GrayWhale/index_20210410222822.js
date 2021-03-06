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

import Gray from '../../../../assets/Animais/Baleia/Cinzenta.png';
import Logo from '../../../../assets/Logo/Logo.png';
import Navbar from '../../../../assets/Logo/Navbar.png';
// import api from '../../../../services/api';

Icon.loadFont();
export default function GrayWhale({ navigation }) {
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
          <ImageAnimal source={Gray} />
          <HeaderAnimal>
            <Image source={Navbar} style={{ width: 20 }} resizeMode="contain" />
            <Image source={Logo} style={{ width: 25 }} resizeMode="contain" />
          </HeaderAnimal>
          <BackButton>
            <Icon name="west" size={14} color="#25C1AF" />
          </BackButton>

          <BackgroundText>
            <ContainerTitle>
              <TitleAnimal>Baleia Cinzenta</TitleAnimal>
              <TitleAnimal
                style={{
                  fontWeight: 'normal',
                  marginLeft: 5,
                  fontSize: 16,
                }}
              >
                - Balaenoptera
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
                Essa ?? a menor das baleias, podendo alcan??ar no m??ximo 10 metros
                de comprimento e pesar em torno de 9 toneladas. Seu nome ??,
                poss??velmente, em homenagem ?? um ca??ador de baleias noruegu??s
                chamado Meicke, que confundiu essa baleia com a maior baleia nos
                oceanos, a azul. Podem ser encontradas pr??ximas da costa na
                regi??o sudeste do Brasil.
              </TextAboutAnimal>
            </ContainerAboutAnimal>
          </BackgroundText>
        </ContainerAnimal>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
