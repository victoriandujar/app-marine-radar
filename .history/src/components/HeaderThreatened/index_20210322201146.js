import React from 'react';

import { View, SafeAreaView, Image, StyleSheet, Text } from 'react-native';

import Logo from '../../assets/Logo/Logo.png';
import Navbar from '../../assets/Logo/Navbar.png';

import { useTitle } from '~/context/title';

export default function HeaderThreatened() {
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0A4BF1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
  },

  subTitle: {
    backgroundColor: '#0A4BF1',
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  textExplore: {
    color: '#fff',
    fontWeight: 'bold',
  },

  textMarine: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
