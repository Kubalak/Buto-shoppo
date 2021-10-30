import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import TopBar from './navigation/TopBar';
import ShopItem from './components/ShopItem';
// import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.base}>
      <TopBar/>
      <View style={styles.test}> 
        <ShopItem img={0} title="No co to tylko Nike!" price="210,12 zł"/>
        <ShopItem img={1} title="No co ?!" price="Priceless"/>
        <ShopItem img={2} title="No odczep się!" price="1 mln zł"/>
      </View>
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
  test: {
    padding: 20,
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#fee',
    alignItems: 'baseline',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  base:
  {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0,
    flex: 1,
  }
});
