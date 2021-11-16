import React from 'react';
import {View,Text, StyleSheet, ScrollView} from 'react-native';
import { Items } from '../storage/items';

export default function Cart({navigation})
{
    console.log(Items.cart);
    let items = [];
    let index = 0;
    for (var item of Items.cart)
    {   index += 1;
        items.push(<Text style={{fontWeight: 'bold', padding: 10}} key={index}> {item} </Text>);
    }
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={style.default}>
                <Text>
                    This is cart!
                    {items}
                </Text>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    default:
    {
        backgroundColor: '#fff',
    },

});