import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import TopBar from './navigation/TopBar';
import ShopItem from './components/ShopItem';
// import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  let items = [];
  items.push(new ShopItem({key: 0, uri:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d46ff92d-fdc8-4869-8469-838fbb261881/buty-meskie-air-more-uptempo-KflhC2.png',title:"No co to tylko Nike!",price:"210,12 zł"}))
  items.push(new ShopItem({key: 1, uri:'https://github.com/Kubalak/ATM_Simulator/raw/main/src/main/resources/textures/card_slot_in.png', title:"No odczep się!", price:"1 mln zł"}))
  items.push(new ShopItem({key: 2, uri:'https://github.com/Kubalak/ATM_Simulator/raw/main/src/main/resources/textures/0.png', title:"No co ?!", price:"Priceless"}))
  return (
    <View style={styles.base}>
      <TopBar/>
      <View style={styles.test}> 
        {items}
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
    backgroundColor: '#fff',
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
