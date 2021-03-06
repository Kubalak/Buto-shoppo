import React from "react";
import { View,StyleSheet,Text } from "react-native";

export default function MyOffersBar({navigation}) {
    return(
        <View style={style.default}>
            <Text>Moje oferty</Text>
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