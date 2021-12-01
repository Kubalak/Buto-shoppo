import React from "react";
import { View,Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import Sizes from "./Sizes";
import Colours from "./Colours";

export default function OfferItem({navigation,offer}) {

    return(
        <TouchableOpacity style={style.default} onPress={() => navigation.navigate("offerView",{props:offer})}>
            <View style={style.base}>
                <View style={{flex:1}}>
                    <Image source={{uri: offer.uri}} style={style.image}/></View>
                <View style={{flex:2, paddingTop: 5}}>
                    <Text>Sprzedajesz: <Text style={{fontWeight: 'bold'}}>{offer.title}</Text></Text>
                    <Text>Dostępne rozmiary: <Sizes props={offer.availableSizes}/></Text>
                    <View style={{flexDirection:'row'}}><Text>Dostępne kolory:</Text><Colours props={offer.availableColours}/></View>
                    <Text>Materiał: <Text style={{fontWeight: 'bold'}}>{offer.material}</Text></Text>
                    <Text>Cena za parę: <Text style={{fontWeight:'bold'}}>{offer.price.toFixed(2).toString().replace('.',',')} zł</Text></Text>
                
                </View>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    default:{
        flex: 1,
        height: 125,
        margin: 5,
    },
    base: {
        flex: 1,
        paddingTop: 5,
        flexDirection: 'row',
        elevation: 6,
        borderRadius: 5,
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 13,   
        shadowOffset: {widht: 0, height: 5},
        backgroundColor: '#F5F5F5',
        
    },
    image:{
        margin: 5,
        marginTop: 10,
        width: 100,
        height: 100,
        resizeMode: 'stretch'
    }
})