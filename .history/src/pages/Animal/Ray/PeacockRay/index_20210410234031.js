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

import Peacock from '../../../../assets/Animais/Arraia/Pavao.png';
import Logo from '../../../../assets/Logo/Logo.png';
import Navbar from '../../../../assets/Logo/Navbar.png';
// import api from '../../../../services/api';

Icon.loadFont();
export default function PeacockRay({ navigation }) {
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
          <ImageAnimal source={Peacock} />
          <HeaderAnimal>
            <Image source={Navbar} style={{ width: 20 }} resizeMode="contain" />
            <Image source={Logo} style={{ width: 25 }} resizeMode="contain" />
          </HeaderAnimal>
          <BackButton>
            <Icon name="west" size={14} color="#25C1AF" />
          </BackButton>

          <BackgroundText>
            <ContainerTitle>
              <TitleAnimal>Arraia Olho de Pavão</TitleAnimal>
              <TitleAnimal
                style={{
                  fontWeight: 'normal',
                  marginLeft: 5,
                  fontSize: 14,
                }}
              >
                - Ancylostoma
              </TitleAnimal>
            </ContainerTitle>

            <ContainerPlace>
              <Icon name="place" size={18} color="#25C1AF" />
              <Text style={{ color: '#25C1AF', fontSize: 12 }}>
                Águas tropicais costeiras do Indo-Pacífico ocidental
              </Text>
            </ContainerPlace>

            <ContainerAboutAnimal>
              <TextAboutAnimal>
                A arraia-olho-de-pavão, é um peixe cartilagíneo do gênero
                Potamotrygon. Pouco se sabe sobre esta uje ovovivípara. Sabe-se
                que é perigosa pois a sua Ferroada causa dores fortes. As
                manchas no corpo são compostos por um um círculo claro cercado
                por um anel escuro exterior. A padronização é bastante variável,
                talvez para combinar com os habitats diferentes em que estes
                ocorrem peixes. Esta variação também é afetada pelo nível de
                iluminação do aquário. Seu ferrão encontrado na cauda é formado
                por dentina, mesmo material que compõe o dente humano, e
                associado a glândulas de veneno.
              </TextAboutAnimal>
            </ContainerAboutAnimal>
          </BackgroundText>
        </ContainerAnimal>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
