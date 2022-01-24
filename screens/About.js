import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const BottomTabNavigator = createBottomTabNavigator();

function Kuba(){
    return(
        <View style={style.default}>
            <ImageBackground source={require('../assets/background.png')} style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/icon.png')} style={{ width: 200, height: 200, resizeMode: 'stretch', marginBottom: 25 }} />
            <View style={style.styleKuba}>
            <Text style={style.KubaHeader}><FontAwesomeIcon icon="fire" size={30} color='#EA9935'/>Kuba<FontAwesomeIcon icon="fire" size={30} color='#EA9935'/></Text>
            <Text style={style.KubaText}>
                - Stworzenie nawigacji{'\n'}
                - Obsługa axiosa{'\n'}
                - Backend w <Text style={{...style.KubaText, fontStyle: 'italic'}}>PHP, MySQL <FontAwesomeIcon icon="grin-tongue-squint" size={25} color='#EA9935'/></Text>{'\n'}
                - Obsługa aparatu{'\n'}
                - Logowanie do aplikacji {'\n'}
                - Przesyłanie formularzy{'\n'}
            </Text>
            </View>
            </ImageBackground>
        </View>
    );
}

function Patryk(){
    return(
        <View style={style.default}>
            <ImageBackground source={require('../assets/background.png')} style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={style.styl_Patryk_title}>  Butto shoppo INC   </Text>
            <Image source={require('../assets/icon.png')} style={{ width: 200, height: 200, resizeMode: 'stretch', marginBottom: 25 }} />
            <Text style={style.styl_Patryk}>
                *Patryk* {"\n"}
                - Interfejs koszyka {"\n"}
                - Item View {"\n"}
                - Toast przy zakupie {"\n"}
                - Modal przy usuwaniu {"\n"}
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
                tabBarIcon: (focused) => <FontAwesomeIcon icon="dizzy" size={18} color='#FFA538'/> //Należy zmienić ikonę
            }}
            name="Kuba"
            component={Kuba}
            />
            <BottomTabNavigator.Screen
            options={{
                headerShown: false,
                tabBarIcon: (focused) => <FontAwesomeIcon icon="tired" size={18} color="#FFA538"/> //Należy zmienić ikonę
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
        color: '#EA9935',
    },
    styleKuba:{
        width: '100%',
        
    },
    KubaHeader:{
        color: '#EA9935',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    KubaText:{
        fontSize: 25,
        marginLeft: 25,
        fontWeight: 'bold',
        color:'#EA9935',

        color: '#FF8C00',
    },
    styl_Patryk_title:{
        fontSize: 40,
        fontWeight: 'bold',
        fontStyle:'italic',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#FF8C00',
        textDecorationLine:'underline',
        
    }
})