import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,Image, SafeAreaView } from "react-native";
import { Items } from '../storage/items';
import { useNavigation } from '@react-navigation/native';
import Sizes from './Sizes';
import Colours from './Colours';

export default function ShopItem (props) {   
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
                <Text style={style.title} numberOfLines={1}>{props.title}</Text>
                <View style={style.props}>
                    <Text numberOfLines={1}>· Materiał: <Text numberOfLines={1} style={{fontWeight: 'bold'}}>{props.material}</Text></Text>
                    <Text numberOfLines={1}>· Rozmiary: <Sizes props={props.availableSizes}/></Text>
                    <Text numberOfLines={1}>· Dostępne kolory: </Text>
                    <SafeAreaView style={{flexDirection: 'row', flexShrink: 1, width: 90}}><Colours props={props.availableColours}/></SafeAreaView>
                    
                </View>
            </View>
            <View style={style.buyOffer}>
                <Text style={style.price}>{props.price.toFixed(2).toString().replace(".", ",")} zł</Text>
                <TouchableOpacity style={style.buyPrt} onPress={() => AddToCart()}>
                    <Text style={style.buy}>Do koszyka <FontAwesome  name="shopping-basket"/></Text>
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
            paddingTop: 10,
            flex: 1,
            height: 150,
            
        },
        baseOffer: {
            flex: 1,
            flexDirection: 'row',
            elevation: 6,
            shadowRadius: 10,
            shadowColor: 'black',
            shadowOpacity: 13,
            shadowOffset: {widht: 0, height: 5},
            backgroundColor: '#F5F5F5',
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
            flex: 1.3,
        },
        price:{
            textAlignVertical: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
            textAlign: 'right',
            paddingRight: 15,
        },
        buyOffer:{
            flex: 1,
            paddingTop: 40
        },
        buyPrt: {
            alignSelf: 'flex-end',
            marginTop: 32,
            paddingRight: 10,
        },
        buy:{
            fontSize: 13,
            textAlign: 'center',
            textAlignVertical: 'center',
            width: 105,
            height: 35,
            color: '#555555',
            backgroundColor: '#40F98F',
            borderRadius: 35,
            alignSelf: 'flex-end',
            elevation: 3,
            shadowRadius: 5,
            shadowColor: 'black',
            shadowOpacity: 3
            
        }
    }
);