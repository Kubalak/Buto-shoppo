import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import HomeNavigation from './navigation/HomeNavigation';
import { NativeBaseProvider } from 'native-base';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faArrowLeft, faArrowRight, faShoppingCart, faCartPlus, faPlus, faImage, faEdit, faCaretUp, faCaretDown, faReply } from '@fortawesome/free-solid-svg-icons';

library.add(
  faTrash,
  faArrowLeft,
  faArrowRight,
  faShoppingCart,
  faCartPlus,
  faPlus,
  faImage,
  faEdit,
  faCaretUp,
  faCaretDown,
  faReply
)

export default function App() {
  return (
    <View style={styles.base}>
      <NativeBaseProvider>
        <HomeNavigation />
      </NativeBaseProvider>
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  }
});
