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

import Minke from '../../../../assets/Animais/Baleia/Minke.png';
import Logo from '../../../../assets/Logo/Logo.png';
import Navbar from '../../../../assets/Logo/Navbar.png';
// import api from '../../../../services/api';

Icon.loadFont();
export default function Animal({ navigation }) {
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
          <ImageAnimal source={Minke} />
          <HeaderAnimal>
            <Image source={Navbar} style={{ width: 20 }} resizeMode="contain" />
            <Image source={Logo} style={{ width: 25 }} resizeMode="contain" />
          </HeaderAnimal>
          <BackButton>
            <Icon name="west" size={14} color="#25C1AF" />
          </BackButton>

          <BackgroundText>
            <ContainerTitle>
              <TitleAnimal>Baleia-de-minke</TitleAnimal>
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
                Essa é a menor das baleias, podendo alcançar no máximo 10 metros
                de comprimento e pesar em torno de 9 toneladas. Seu nome é,
                possívelmente, em homenagem à um caçador de baleias norueguês
                chamado Meicke, que confundiu essa baleia com a maior baleia nos
                oceanos, a azul. Podem ser encontradas próximas da costa na
                região sudeste do Brasil.
              </TextAboutAnimal>
            </ContainerAboutAnimal>
          </BackgroundText>
        </ContainerAnimal>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
