import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,Image } from "react-native";

export default ShopItem = (props) =>
{
    return(
    <TouchableOpacity style={style.default} key={props.key}>
        <View>
            <Image source={{uri: props.uri}} style={style.image} />
            <Text style={style.title}>{props.title}</Text>
            <View style={style.offer}>
                <Text style={style.price}>{props.price}</Text>
                <TouchableOpacity>
                    <FontAwesome style={style.buy} name="shopping-basket"/>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
    );
}

const style = StyleSheet.create(
    {
        default:{
            margin: 10,
            width: 150,
            height: 160,
            backgroundColor: '#fff',
            borderRadius: 5,
            shadowRadius: 10,
            shadowOffset: {width: 1, height: 15},
            shadowColor: '#033',
            shadowOpacity: 1.0,
            elevation: 5,
        },
        title:{
            alignSelf:'center',
            paddingTop: 10,
            paddingBottom: 5,
            fontWeight: 'bold',
        },
        image:
        {
            marginTop: 10,
            padding: 15,
            width:75, 
            height: 75, 
            resizeMode: 'stretch',
            alignSelf:'center', 
        },
        offer:{
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        price:{
            textAlignVertical: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
        },
        buy:{
            fontSize: 15,
            textAlign: 'center',
            textAlignVertical: 'center',
            width:35,
            height: 35,
            color: 'white',
            backgroundColor: 'red',
            borderRadius: 35,
        }
    }
);