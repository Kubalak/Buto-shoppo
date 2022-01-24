import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { Center } from "native-base";

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
            <ImageBackground source={require('../assets/background.png')} style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/icon.png')} style={{ width: 200, height: 200, resizeMode: 'stretch', marginBottom: 25 }} />
            <Text style={style.styl_Patryk}>
                *Patryk* {"\n"}
                -Interfejs koszyka {"\n"}
                -Item View {"\n"}
                -Toast przy zakupie {"\n"}
                -Modal przy usuwaniu {"\n"}
            </Text>
            </ImageBackground>
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
                tabBarIcon: (focused) => <FontAwesomeIcon icon="tired" size={18} color="#00AD3F"/> //Należy zmienić ikonę
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
    },
    styl_Patryk:{
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle:'italic',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#009B77',
    }
})