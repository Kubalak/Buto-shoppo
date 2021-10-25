import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './navigation/TopBar';
// import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.test}>
      <TopBar/>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:
  {
    color: '#f0f',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});
