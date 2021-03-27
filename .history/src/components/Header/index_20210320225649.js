import React from 'react';

import { View, SafeAreaView, Image, StyleSheet } from 'react-native';

import Navbar from '../../assets/Logo/Navbar.png';

export default function Header() {
  return (
    <SafeAreaView>
      <View>
        <Image source={Navbar} resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: #0A4BF1,
  }
});
