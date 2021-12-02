import React from "react";
import { TouchableOpacity, View,StyleSheet,Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function HomeBar({navigation}) {
    return(
        <View style={style.default}>
            <Text style={{paddingLeft: 45}}>Buto-shoppo</Text>
            <TouchableOpacity onPress={() => {navigation.push('cart')}}><FontAwesomeIcon icon="shopping-cart" size={24} color="#000000"/></TouchableOpacity>
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