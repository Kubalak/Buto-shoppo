import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabNavigator = createBottomTabNavigator();
/* Do dodania BottomTabNavigator i jakieś informacje o tym co kto robił. */

function Kuba(){
    return(
        <View style={style.default}>
            <Text>
                Kuba
            </Text>
        </View>
    );
}

function Patryk(){
    return(
        <View style={style.default}>
            <Text>
                Patryk
            </Text>
        </View>
    );
}

export default function About()
{
    return(
        <BottomTabNavigator.Navigator>
            <BottomTabNavigator.Screen
            options={{
                headerShown: false,
                tabBarIcon: (focused) => <View style={{width:15, height:15, backgroundColor: '#00AD3F', elevation: 3, borderRadius: 2}}/> //Należy zmienić ikonę
            }}
            name="Kuba"
            component={Kuba}
            />
            <BottomTabNavigator.Screen
            options={{
                headerShown: false,
                tabBarIcon: (focused) => <View style={{width:15, height:15, backgroundColor: '#00AD3F', elevation: 3, borderRadius: 2}}/> //Należy zmienić ikonę
            }}
            name="Patryk"
            component={Patryk}
            />

        </BottomTabNavigator.Navigator>
    );
}

const style = StyleSheet.create({
    default:{
        flex:1,
        backgroundColor: 'white',
    }
})