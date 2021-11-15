import React from "react";
import { useState } from "react";
import {View,StyleSheet,Text,Image,TextInput, Pressable} from "react-native";

export default function Login({navigation})
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={style.default}>
            <Image source={require('../assets/icon.png')} style={{width: 150, height: 150, resizeMode: 'stretch', marginBottom: 25}}/>
            <View style={style.input}>
               <TextInput
                  style={style.textInput}
                  placeholder="e-mail"
                  placeholderTextColor="#8b8b8b"
                  onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={style.input}>
                <TextInput
                    style={style.textInput}
                    placeholder="Hasło"
                    placeholderTextColor="#8b8b8b"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <Text>Zapomniałeś hasła?</Text>
            <Pressable style={style.loginBtn} onPress={() => {navigation.replace('home');}}><Text>Zaloguj</Text></Pressable>
        </View>
    );
}

const style = StyleSheet.create({
    default:{
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    input:{
        backgroundColor: "#40F98F",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    textInput:{
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn:{
        backgroundColor: "#11D766",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: "center",
    },
});
