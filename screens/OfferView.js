import React from "react";
import { View,StyleSheet, TouchableOpacity,Text } from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import ItemView  from "./ItemView";

export default function OfferView({navigation,route}) 
{

    return (
        <View style={style.default}>
            <ItemView route={route} navigation={navigation} style={{flex: 1}}/>
            <TouchableOpacity style={style.pressable} onPress={() => navigation.push('editOffer', {params:route.params})}>
                <Text style={{fontSize: 18}}>Edytuj <FontAwesomeIcon icon="edit" size={18}/></Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: 'white'
    },
    pressable:
    {
        alignSelf: 'flex-end',
        height: 35,
        paddingTop: 5,
        marginBottom: 10,
        marginRight: 20,
        width: 100,
        borderRadius: 5,
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 5,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22E877',
    }
})