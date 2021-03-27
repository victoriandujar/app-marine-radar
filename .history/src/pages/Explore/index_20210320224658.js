import React from 'react';

import { Image } from 'react-native';
import Img_Home from '../../assets/Img_Home.png';

import { Container, SignLink, SignLinkText } from './styles';

export default function Explore({ navigation }) {
  return (
    <>
      <Container>
        <Image source={Img_Home} />
      </Container>
    </>
  );
}
