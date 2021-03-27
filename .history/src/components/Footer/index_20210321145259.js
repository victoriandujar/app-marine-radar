import React from 'react';

import { View, SafeAreaView, Image, Text } from 'react-native';

import Logo from '../../assets/Logo/Logo.png';
import Navbar from '../../assets/Logo/Navbar.png';

import { useTitle } from '~/context/title';

export default function Header() {
  const { title } = useTitle();

  return (
    <SafeAreaView>
      <View>
        <Text>Olá</Text>
      </View>
    </SafeAreaView>
  );
}
