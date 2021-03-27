/* eslint-disable import/no-named-as-default */
import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Img_Home2 from '../../assets/Home/Img_Home2.png';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  padding: 20px;
`;

export const TextAnimals = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const TextMapa = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const TextAmeacados = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ContainerAnimals = styled.View`
  background: url(${Img_Home2});
  flex: 1;
  background-color: var(--secondary-initial-bg);
`;
