import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Spinner, HStack, Heading } from "native-base";
import ShopItem from '../components/ShopItem';
import HomeBar from '../navigation/HomeBar';
import MyOffersBar from '../navigation/MyOffersBar';
import MyOffers from "./MyOffers";
import NewOffer from "./NewOffer";
import Account from "./Account";
import About from "./About";
import axios from "axios";

const axiosInstance = axios.create();

function HomeView({ navigation }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance.get("/get")
      .then(function (response) { //Uses enviromental variables in the .env file
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data);
        if (error.response && error.response.data.data) {
          Alert.alert("Błąd!", error.response.data.data);
        }
      })

  }, []);

  if (data === null) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
        <HStack space={2} alignItems="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            Ładowanie...
          </Heading>
        </HStack>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ShopItem item={item} />}>
      </FlatList>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default function Home({ navigation }) {

  return (
    <Drawer.Navigator initialRouteName="Sklep" screenOptions={{
      headerStyle: {
        backgroundColor: '#FFFFFF',
        elevation: 5,
        shadowOpacity: 3,
        shadowRadius: 5,
        shadowColor: 'black'
      }
    }}>
      <Drawer.Screen name="Sklep" component={HomeView}
        options={({ navigation, route }) => ({
          headerTitle: (props) => <HomeBar navigation={navigation} />,
        })} />
      <Drawer.Screen name="Moje oferty" component={MyOffers}
        options={({ navigation, route }) => ({
          headerTitle: (props) => <MyOffersBar navigation={navigation} />,
        })} />
      <Drawer.Screen name="Nowa oferta" component={NewOffer}
        options={({ navigation, route }) => ({
          headerTitle: (props) => <Text>Nowa oferta</Text>,
        })} />
      <Drawer.Screen name="Informacje" component={About}
        options={({ navigation, route }) => ({
          headerTitle: (props) => <Text>O autorach</Text>,
        })} />
      <Drawer.Screen name="Konto" component={Account}
        options={({ navigation, route }) => ({
          headerTitle: (props) => <Text>Moje konto</Text>,
        })} />
    </Drawer.Navigator>
  );
  //Należy dodać ekrany z ofertami własnymi (Moje oferty) i ew. dodatkowe kategorie.
}

const styles = StyleSheet.create({
  test: {
    padding: 15,
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'baseline',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});