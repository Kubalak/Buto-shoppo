import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { TouchableOpacity, View,StyleSheet,Text } from "react-native";

export default function HomeBar({navigation}) {
    return(
        <View style={style.default}>
            <Text>Buto-shoppo</Text>
            <TouchableOpacity onPress={() => {navigation.push('cart')}}><FontAwesome name="shopping-cart" size={24} color="#666"/></TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    default:
    {
        textAlign: 'right',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },

});