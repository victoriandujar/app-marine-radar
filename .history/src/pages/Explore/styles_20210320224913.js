import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'android',
  behavior: 'padding',
})`
  flex: 0;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

export const WelcomeText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const ContentLogo = styled.View`
  display: flex;
  align-items: center;
`;

export const TextLogo = styled.Text`
  font-size: 40px;
  color: #fff;
  font-weight: bold;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  background-color: #25c1af;
  width: 220px;
  padding: 10px;
  border-radius: 30px;
`;
