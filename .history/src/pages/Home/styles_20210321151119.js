/* eslint-disable import/no-named-as-default */
import { Platform } from 'react-native';
import styled from 'styled-components/native';

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
