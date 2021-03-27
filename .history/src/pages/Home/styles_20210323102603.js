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

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #555454;
`;

export const Subtitle = styled.Text`
  font-size: 10px;
  color: #aeaeae;
  margin-bottom: 15px;
`;

export const ContainerAnimals = styled.View`
  width: 280px;
  height: 150px;
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

export const TextAnimals = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
