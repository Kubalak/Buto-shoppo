import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,Image, SafeAreaView } from "react-native";
import { Items } from '../storage/items';
import { useNavigation } from '@react-navigation/native';
import Sizes from './Sizes';
import Colours from './Colours';

export default ShopItem = (props) =>
{   
    const navigation = useNavigation();
    props = props.item;
    function AddToCart(){
        if(Items.cart.length > 0)
        {
            for (var i = 0; i < Items.cart.length; i++)
            {
                if(Items.cart[i].key !== undefined && Items.cart[i].key === props.key)
                {
                    Items.cart[i].amount++;
                    break;
                }
                else if(i === Items.cart.length - 1)
                {
                    Items.cart.push({key: props.key, amount: 1});
                }
            }
        }
        else
        {
            Items.cart.push({key: props.key, amount: 1});
        }
    }
    return(
    <TouchableOpacity style={style.default} key={props.key} onPress={() => navigation.navigate('itemView',{props})}>
        <View style={style.baseOffer}>
            <Image source={{uri: props.uri}} style={style.image} />
            <View style={style.offer}>
                <Text style={style.title}>{props.title}</Text>
                <View style={style.props}>
                    <Text numberOfLines={1}>· Materiał: <Text numberOfLines={1} style={{fontWeight: 'bold'}}>{props.material}</Text></Text>
                    <Text numberOfLines={1}>· Rozmiary: <Sizes props={props.availableSizes}/></Text>
                    <Text numberOfLines={1}>· Kolory: </Text>
                    <SafeAreaView style={{flexDirection: 'row', flexShrink: 1, width: 90}}><Colours props={props.availableColours}/></SafeAreaView>
                    
                </View>
            </View>
            <View style={style.buyOffer}>
                <Text style={style.price}>{props.price.toFixed(2).toString().replace(".", ",")} zł</Text>
                <TouchableOpacity style={style.buyPrt} onPress={() => AddToCart()}>
                    <Text style={style.buy}>Do koszyka <FontAwesome   name="shopping-basket"/></Text>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
    );
}

const style = StyleSheet.create(
    {
        default:{
            marginBottom: 10,
            marginTop: 10,
            width: '100%',
            height: 150,
            backgroundColor: '#fff',
            shadowRadius: 10,
            shadowOffset: {width: 0, height: 5},
            shadowColor: '#033',
            shadowOpacity: 2.0,
            elevation: 3,
        },
        baseOffer: {
            flexDirection: 'row'
        },
        props:{

        },
        title:{
            alignSelf:'center',
            paddingTop: 10,
            paddingBottom: 5,
            marginBottom: 20,
            fontWeight: 'bold',
        },
        image:
        {
            marginTop: 10,
            marginLeft: 5,
            width: 100, 
            height: 100, 
            resizeMode: 'stretch',
            alignSelf:'flex-start', 
        },
        offer:{
            paddingLeft: 10,
            paddingRight: 10,
            width: 180,
        },
        price:{
            textAlignVertical: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
        },
        buyOffer:{
            width: 100,
            paddingTop: 40
        },
        buyPrt: {
            alignSelf: 'flex-end',
            marginTop: 30
        },
        buy:{
            fontSize: 13,
            textAlign: 'center',
            textAlignVertical: 'center',
            width: 105,
            height: 35,
            color: 'white',
            backgroundColor: 'red',
            borderRadius: 35,
            alignSelf: 'flex-end'
            
        }
    }
);