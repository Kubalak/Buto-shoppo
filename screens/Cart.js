import React from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';
import { Items } from '../storage/items';
import CartItem from '../components/CartItem';

export default function Cart(props)
{
    props = props.item;
    let items = [];
    let index = 0;
    for (var item of Items.cart)
    {   
        index += 1;
        items.push(<CartItem key={index} props={item}/>);
    }
    return (
    <View style={style.default}>

    <FlatList 
        data={Items.cart}
        renderItem={({item}) => <CartItem props={item}/>}/>    
    </View>
    ); 
}

const style = StyleSheet.create({
    default:
    {
        flex:1,
        backgroundColor: '#fff',
    },
    

});