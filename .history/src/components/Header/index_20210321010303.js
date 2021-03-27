import React from 'react';

import { View, SafeAreaView, Image, StyleSheet, Text } from 'react-native';

import Navbar from '../../assets/Logo/Navbar.png';
import Logo from '../../assets/Logo/Logo.png';

import { SignLink } from './styles';

export default function Header({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image source={Navbar} style={{ width: 20 }} resizeMode="contain" />
        <Image source={Logo} style={{ width: 25 }} resizeMode="contain" />
      </View>
      <View style={styles.subTitle}>
        <Text style={styles.textExplore}>Explorar</Text>
        <Text style={styles.textMarine}>Marine Radar</Text>
      </View>
      <View style={styles.subHeader}>
        <Text
          style={styles.textMenu}
          onPress={() => navigation.navigate('Animals')}
        >
          Animais
        </Text>
        <Text style={styles.textMenu}>Mapa</Text>
        <Text style={styles.textMenu}>Ameaçados</Text>
      </View>
      <View style={styles.box}>
        <Text>Teste</Text>
      </View>
      <View style={styles.box}>
        <Text>Teste</Text>
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
    height: 60,
  },

  subTitle: {
    backgroundColor: '#0A4BF1',
    paddingLeft: 20,
  },

  subHeader: {
    backgroundColor: '#0A4BF1',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  textMenu: {
    fontSize: 12,
    width: 80,
    color: '#0A4BF1',
    backgroundColor: '#fff',
    padding: 8,
    fontWeight: 'bold',
    borderRadius: 5,
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

  box: {
    width: '87%',
    backgroundColor: '#cccccc',
    padding: 50,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
});
