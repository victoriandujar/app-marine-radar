import React from 'react';

import { SafeAreaView, Text } from 'react-native';

import { Container, Menu } from './styles';

export default function Footer({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text onPress={() => navigation.navigate('Home')}>Home</Text>
      </View>
    </SafeAreaView>
  );
}
