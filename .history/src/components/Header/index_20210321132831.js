import React from 'react';

import { View, SafeAreaView, Image, StyleSheet, Text } from 'react-native';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Logo from '../../assets/Logo/Logo.png';
import Navbar from '../../assets/Logo/Navbar.png';

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});
