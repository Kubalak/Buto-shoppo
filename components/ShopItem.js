import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,Image, SafeAreaView } from "react-native";
import { Items } from '../storage/items';
import { useNavigation } from '@react-navigation/native';
import Sizes from './Sizes';
import Colours from './Colours';
import {useToast} from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function ShopItem (props) {

    const navigation = useNavigation();
    const toast = useToast();
    props = props.item;
    props.price = parseFloat(props.price);

    function AddToCart(){
        
        let item = null;
        if(Items.cart.length > 0)
        {
            
            for (var i = 0; i < Items.cart.length; i++)
            {
                if(Items.cart[i].key !== undefined && Items.cart[i].key === props.key)
                {
                    Items.cart[i].amount++;
                    item = props.title;
                    break;
                }
                else if(i === Items.cart.length - 1)
                {
                    Items.cart.push({key: props.key, amount: 1});
                    item = props.title;
                }
            }
        }
        else
        {
            Items.cart.push({key: props.key, amount: 1});
            item = props.title;
        }

        toast.show({
        title: "Nowy zakup",
        status: "success",
        description: item +"\nDodano element do koszyka",
        duration: 1500
        })
    }
    
    return(
    <TouchableOpacity style={style.default} key={props.key} onPress={() => navigation.navigate('itemView',{props})}>
        <View style={style.baseOffer}>
            <Image source={{uri: props.uri}} style={style.image} />
            <View style={style.offer}>
                <Text style={style.title} numberOfLines={1}>{props.title}</Text>
                <View style={style.props}>
                    <Text numberOfLines={1}>· Materiał: <Text numberOfLines={1} style={{fontWeight: 'bold'}}>{props.material}</Text></Text>
                    <Text numberOfLines={1}>· Rozmiary: <Sizes props={JSON.parse(props.availableSizes)}/></Text>
                    <Text numberOfLines={1}>· Dostępne kolory: </Text>
                    <SafeAreaView style={{flexDirection: 'row', flexShrink: 1, width: 90}}><Colours props={JSON.parse(props.availableColours)}/></SafeAreaView>
                    
                </View>
            </View>
            <View style={style.buyOffer}>
                <Text style={style.price}>{props.price.toFixed(2).toString().replace(".", ",")} zł</Text>
                <TouchableOpacity style={style.buyPrt} onPress={() => AddToCart()}>
                    <Text style={style.buy}>Do koszyka <FontAwesomeIcon  icon="cart-plus" size={16} /></Text>
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
            padding: 5,
            flex: 1,
            height: 150,
            elevation: 6,
            shadowRadius: 10,
            shadowColor: 'black',
            shadowOpacity: 13,
            shadowOffset: {widht: 0, height: 5},
            backgroundColor: '#F5F5F5',
            
        },
        baseOffer: {
            flex: 1,
            flexDirection: 'row',
            
        },
        props:{

        },
        title:{
            alignSelf:'center',
            paddingTop: 5,
            marginBottom: 15,
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: 15,
        },
        image:
        {
            width: 100, 
            height: 100,
            borderRadius: 10, 
            resizeMode: 'stretch',
            alignSelf:'flex-start', 
        },
        offer:{
            paddingLeft: 5,
            paddingRight: 5,
            flex: 1.4,
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
            paddingTop: 30
        },
        buyPrt: {
            marginTop: 30,
            marginRight: 5,
            backgroundColor: '#40F98F',
            borderRadius: 35,
            alignSelf: 'flex-end',
            elevation: 2,
            shadowRadius: 15,
            shadowColor: 'black',
            shadowOpacity: 15
        },
        buy:{
            fontSize: 13,
            textAlign: 'center',
            textAlignVertical: 'center',
            width: 105,
            height: 35,
            color: '#555555',

            
        }
    }
);