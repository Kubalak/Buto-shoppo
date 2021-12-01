import React from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';
import OfferItem from '../components/OfferItem';
import { Items } from '../storage/items';
import { Status } from '../storage/State';

export default function MyOffers({navigation})
{
    let data = Items.shopItems.filter(function(elem) {
        return elem.createdBy === Status.loggedAs
    });

    return(
    <View style={style.default}>
        <FlatList 
            data={data}
            renderItem={({item}) => <OfferItem navigation={navigation} offer={item}/>}
        />
    </View>
    );
}

const style = StyleSheet.create({
    default: {
        flex:1,
        backgroundColor: 'white'
    }
})