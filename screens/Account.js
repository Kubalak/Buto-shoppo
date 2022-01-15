import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Account({ navigation }) {
    return (
        <View style={style.default}>
            <View style={{ textAlign: 'center', alignItems: 'center', paddingTop: 40 }}>
                <Text style={{fontSize: 18}}>
                    Akcje
                </Text>
            </View>
            <View style={{ alignItems: 'center', paddingTop: 20 }}>
                <TouchableOpacity style={style.logout} onPress={() => { navigation.replace('login', { logout: true }) }}>
                    <Text>Wyloguj</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    default: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center'

    },
    logout: {
        backgroundColor: '#40F98F',
        elevation: 4,
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    }
})