import React from "react";
import {StyleSheet,View, Text, FlatList} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShopItem from '../components/ShopItem';
import HomeBar from '../navigation/HomeBar';
import MyOffersBar from '../navigation/MyOffersBar';
import MyOffers from "./MyOffers";
import {Items} from '../storage/items';
import NewOffer from "./NewOffer";

function HomeView({navigation}){

    return (
        <View style={{backgroundColor: 'white', flex:1}}>
    <FlatList 
        data={Items.shopItems}
        renderItem={({item}) => <ShopItem item={item}/>}/>         
    </View>);
}
const Drawer = createDrawerNavigator();

export default function Home({navigation})
{

    return(
        <Drawer.Navigator initialRouteName = "Sklep" screenOptions ={{
            headerStyle:{
                backgroundColor: '#FFFFFF'
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
            backgroundColor: '#fff', 
            alignItems: 'baseline',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          },
    });