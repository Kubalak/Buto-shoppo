import React ,{useState}from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';
import { Items } from '../storage/items';
import CartItem from '../components/CartItem';

export default function Cart(props)
{
    props = props.item;
    const [data, setData] = useState(Items.cart);
    const [isLoading, setIsloading] = useState(false);
    function reload(){
        setIsloading(true);
        setData(Items.cart);
        setIsloading(false);
    }
    if(Items.cart.length === 0)
    return(
        <View style={{flex:1, alignContent: 'center', alignItems: 'center', backgroundColor: 'white', justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>
                Koszyk jest pusty
            </Text>
        </View>
    );
    return (
       <FlatList 
        data={Items.cart}
        renderItem={({item}) => <CartItem props={item} reloadFunc={setData}/>}
        style={style.default}
        onRefresh={() => reload()}
        refreshing={isLoading}/>  
   
    ); 
}

const style = StyleSheet.create({
    default:
    {
        flex:1,
        backgroundColor: '#FFFFFF',
    },
});