import React from 'react';

import { View, SafeAreaView, Image, StyleSheet } from 'react-native';

import Navbar from '../../assets/Logo/Navbar.png';
import Logo from '../../assets/Logo/Logo.png';

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image source={Navbar} resizeMode="contain" />
        <Image source={Logo} resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0A4BF1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
