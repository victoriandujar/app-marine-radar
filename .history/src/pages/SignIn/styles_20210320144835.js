/* eslint-disable import/no-named-as-default */
import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';
// eslint-disable-next-line import/no-named-as-default-member
import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background: #0670e1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const ErrorLabel = styled.Text`
  margin-top: 5px;
  align-self: stretch;
  text-align: left;
  color: #e74040;
  font-weight: bold;
  font-size: 15px;
`;

export const SubmitButton = styled(Button)`
  background: #073284;
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 50px;
  align-self: center;
  text-align: left;
  margin-top: 15px;
  font-family: Poppins;
  font-weight: bold;
`;
