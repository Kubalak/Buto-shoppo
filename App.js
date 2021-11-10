import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import TopBar from './navigation/TopBar';
import ShopItem from './components/ShopItem';
// import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
   return (
    <View style={styles.base}>
      <TopBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  base:
  {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0,
    flex: 1,
  }
});
