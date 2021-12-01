import React from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';
import { Items } from '../storage/items';
import CartItem from '../components/CartItem';

export default function Cart(props)
{
    props = props.item;
    let items = [];
    let index = 0;
    if(Items.cart.length === 0)
    return(
        <View style={{flex:1, alignContent: 'center', alignItems: 'center', backgroundColor: 'white', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>
                Koszyk jest pusty
            </Text>
        </View>
    );
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