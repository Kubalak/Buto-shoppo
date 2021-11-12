import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { View,StyleSheet,Text } from "react-native";

export default function CartBar({navigation}) {
    return(
        <View style={style.default}>
            <Text>Koszyk</Text>
        </View>
    );
}

const style = StyleSheet.create({
    default:
    {
        fontSize: 30,
        textAlign: 'right',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});