import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import HomeNavigation from './navigation/HomeNavigation';
import ShopItem from './components/ShopItem';
// import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  /*fetch("http://domowy/sample.txt",
			{
				method: "GET",
				headers:{
				'Content-Type': 'application/json',
				'Content-Transfer-Encoding': 'Binary'
				}
			}
		).then((response) => {
      console.log(response.status);
			return response.json();			
		}).then((data) => {
			console.log(data);
			for (var item of data.data)
			{
				console.log(item.key);
				console.log(item.uri);
				console.log(item.title);
				console.log(item.price);
			}
		}).catch((err) =>{
			console.log(err);
		});*/ //Pobiera poprawnie dane za pomocą fetch
   return (
    <View style={styles.base}>
      <HomeNavigation/>
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
