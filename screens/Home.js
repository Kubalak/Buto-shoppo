import React from "react";
import {ScrollView,View,StyleSheet} from 'react-native';
import ShopItem from '../components/ShopItem';
import {Items} from '../storage/items';


export default function Home()
{
    let items = [];
    for(var i= 0;i<Items.shopItems.length;i++)
        items.push(new ShopItem(Items.shopItems[i]));
    
    return(
        <ScrollView style={{backgroundColor: 'white'}}> 
            <View style={styles.test}>
                {items}
            </View>        
        </ScrollView>
      
    );
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
            height: '100%',
          },
    });