/* eslint-disable import/no-named-as-default */
import { Platform } from 'react-native';
import styled from 'styled-components/native';

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

export const ContainerAnimals = styled.View`
  width: 280px;
  height: 180px;
  border-radius: 20px;
`;

export const ImageAnimals = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;
