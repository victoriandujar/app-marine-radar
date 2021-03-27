import React, { useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { Image, Modal, Text, View } from 'react-native';

import logo from '~/assets/torulog.png';
import { signUpRequest } from '~/store/modules/auth/actions';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  ModalSubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(false);
  const handleClick = () => setCheck(!check);

  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();

  const nameRef = useRef();
  const cpfRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const birthRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('');
  function handleSubmit() {
    setModal(false);
    dispatch(signUpRequest(name, email, password, document, birth, phone));
  }

  return (
    <Container>
      <Image source={logo} style={{ maxWidth: 150, maxHeight: 150, top: 20 }} />
      <Form id="formSignUp">
        <FormInput
          icon="person"
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={40}
          placeholder="Nome completo"
          returnKeyType="next"
          onSubmitEditing={() => nameRef.current.focus()}
          value={name}
          onChangeText={setName}
        />

        <FormInput
          icon="portrait"
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={11}
          placeholder="Informe seu CPF"
          ref={nameRef}
          returnKeyType="next"
          onSubmitEditing={() => cpfRef.current.focus()}
          value={document}
          onChangeText={setDocument}
        />

        <FormInput
          icon="portrait"
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={10}
          placeholder="Informe sua data de nascimento"
          ref={cpfRef}
          returnKeyType="next"
          onSubmitEditing={() => birthRef.current.focus()}
          value={birth}
          onChangeText={setBirth}
        />

        <FormInput
          icon="phone"
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={12}
          placeholder="(DDD) 00000-0000"
          ref={cpfRef}
          returnKeyType="next"
          onSubmitEditing={() => phoneRef.current.focus()}
          value={phone}
          onChangeText={setPhone}
        />

        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          maxLength={40}
          placeholder="Digite seu e-mail"
          ref={phoneRef}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          maxLength={8}
          placeholder="Sua senha secreta"
          ref={emailRef}
          returnKeyType="next"
          value={password}
          onChangeText={setPassword}
        />

        <SubmitButton onPress={() => setModal(true)}>Cadastrar</SubmitButton>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já possuo uma conta</SignLinkText>
        </SignLink>
      </Form>

      <Modal transparent visible={modal} animationType="slide">
        <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              margin: 20,
              padding: 20,
              borderRadius: 10,
              flex: 1,
            }}
          >
            <Text>Termos de Uso</Text>

            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>

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
