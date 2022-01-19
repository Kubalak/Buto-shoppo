import React from 'react';
import { StyleSheet, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import HomeNavigation from './navigation/HomeNavigation';
import { NativeBaseProvider } from 'native-base';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faArrowLeft, faArrowRight, faShoppingCart, faCartPlus, faPlus, faPlusSquare, faImage, faEdit, faCaretUp, faCaretDown, faReply, faStore, faInfo, faUser, faUserTag } from '@fortawesome/free-solid-svg-icons';

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
  faReply,
  faStore,
  faInfo,
  faUser,
  faPlusSquare,
  faUserTag
)

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.base} behavior={Platform.OS ==='android'?"height":"padding"}>
      <NativeBaseProvider>
        <HomeNavigation />
      </NativeBaseProvider>
    </KeyboardAvoidingView>
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
