import React, { useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { Image, Modal, Text, View } from 'react-native';

import logo from '~/assets/torulog.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <Container>
      <Image source={logo} style={{ maxWidth: 150, maxHeight: 150, top: 20 }} />

            <SignLink loading={loading} onPress={() => handleSubmit()}>
              <SignLinkText style={{ color: '#0670e1', margin: 20 }}>
                Aceito os termos de uso
              </SignLinkText>
            </SignLink>

            <SignLink onPress={() => setModal(false)}>
              <SignLinkText style={{ color: '#000' }}>Não aceito</SignLinkText>
            </SignLink>
          </View>
        </View>
      </Modal>
    </Container>
  );
}
