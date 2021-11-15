import React from "react";
import {ScrollView,View,StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShopItem from '../components/ShopItem';
import HomeBar from '../navigation/HomeBar';
import MyOffersBar from '../navigation/MyOffersBar';
import MyOffers from "../screens/MyOffers";
import {Items} from '../storage/items';

function HomeView({navigation}){
    let items = [];
    for(var i= 0;i<Items.shopItems.length;i++)
        items.push(new ShopItem(Items.shopItems[i]));

    return (
    <ScrollView style={{backgroundColor: 'white', flex:1}}> 
        <View style={styles.test}>
            {items}
        </View>        
    </ScrollView>);
}
const Drawer = createDrawerNavigator();
export default function Home({navigation})
{

    return(
        <Drawer.Navigator initialRouteName = "Sklep">
            <Drawer.Screen name="Sklep" component={HomeView} 
            options={({navigation, route})=> ({
                headerTitle: (props) => <HomeBar navigation={navigation}/>,
              })}/>
              <Drawer.Screen name="Moje oferty" component={MyOffers} 
            options={({navigation, route})=> ({
                headerTitle: (props) => <MyOffersBar navigation={navigation}/>,
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