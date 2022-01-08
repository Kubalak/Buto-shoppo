import React, {useState, useEffect} from "react";
import {StyleSheet,View, Text, FlatList} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShopItem from '../components/ShopItem';
import HomeBar from '../navigation/HomeBar';
import MyOffersBar from '../navigation/MyOffersBar';
import MyOffers from "./MyOffers";
import NewOffer from "./NewOffer";
import axios from "axios";
import { Items } from "../storage/items";
import {API_HOST, API_URL} from "@env";

function HomeView({navigation}){
    const [data, setData] = useState(null);
    
  useEffect(() => {
    axios.get(`http://${API_HOST}/${API_URL}/get`).then( function(response){ //Uses enviromental variables in the .env file
        setData(response.data);
      })
      .catch(function (error){
        console.log(error);
        setData(Items.shopItems);
      })

  }, []);

    return (
        <View style={{backgroundColor: 'white', flex:1}}>
            <FlatList 
                data={data}
                renderItem={({item}) => <ShopItem item={item}/>}>
            </FlatList>     
        </View>
    );
}
const Drawer = createDrawerNavigator();

export default function Home({navigation})
{

    return(
        <Drawer.Navigator initialRouteName = "Sklep"  screenOptions ={{
            headerStyle:{
                backgroundColor: '#FFFFFF',
                elevation: 5,
                shadowOpacity: 3,
                shadowRadius: 5,
                shadowColor: 'black'
            }
        }}>
            <Drawer.Screen name="Sklep" component={HomeView} 
            options={({navigation, route})=> ({
                headerTitle: (props) => <HomeBar navigation={navigation}/>,
              })}/>
              <Drawer.Screen name="Moje oferty" component={MyOffers} 
            options={({navigation, route})=> ({
                headerTitle: (props) => <MyOffersBar navigation={navigation}/>,
              })}/>
              <Drawer.Screen name="Nowa oferta" component={NewOffer} 
            options={({navigation, route})=> ({
                headerTitle: (props) => <Text>Nowa oferta</Text>,
              })}/>
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