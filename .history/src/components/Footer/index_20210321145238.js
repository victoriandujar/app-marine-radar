import React from 'react';

import { View, SafeAreaView, Image, Text } from 'react-native';

import Logo from '../../assets/Logo/Logo.png';
import Navbar from '../../assets/Logo/Navbar.png';

import { useTitle } from '~/context/title';

export default function Header() {
  const { title } = useTitle();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image source={Navbar} style={{ width: 20 }} resizeMode="contain" />
        <Image source={Logo} style={{ width: 25 }} resizeMode="contain" />
      </View>
      <View style={styles.subTitle}>
        <Text style={styles.textExplore}>Explorar</Text>
        <Text style={styles.textMarine}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
