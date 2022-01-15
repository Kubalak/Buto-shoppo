import React from "react";
import { Button, Modal } from "native-base";
import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TextInput, Pressable, ImageBackground,Alert } from "react-native";
import { useToast } from "native-base";
import Config from "../config";
import axios from "axios";

const axiosInstance = axios.create();

export default function Login({ navigation, route }) {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [showModal, setShowModal] = useState(false);
    const toast = useToast();

    useEffect(() => {
        Config(false);
        if (route.params && route.params.logout && route.params.logout === true) {
            axiosInstance.get("/logout")
                .then(function (response) {
                    toast.show({
                        title: "Informacja",
                        status: "success",
                        description: response.data.data ? response.data.data : 'Wylogowano',
                        duration: 1500
                    });
                }).catch(function (error) {
                    console.log(error);
                    console.log(error.response);
                })
        }
        else {
            axiosInstance.post("/login", {

                username: "",
                password: ""
            }).then(function (response) {
                navigation.replace('home');

            }).catch(function (error) {
            })
        }
    }, []);

    function MyModal() {
        return (
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Logowanie nie powiodło się</Modal.Header>
                    <Modal.Body>
                        <Text style={{ fontSize: 15 }}>
                            Wprowadzone dane logowania są niepoprawne.
                        </Text>
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: 'white' }}>
                        <Button onPress={() => { setShowModal(false) }}>OK</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        );
    }

    function Verify() {
        axiosInstance.post("/login", {

            username: email,
            password: password
        })
        .then(function (response) {
                navigation.replace('home');

            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status === 403) {
                        setShowModal(true);
                    }
                    console.log(error.response.data);
                }
                else {
                    console.log(error);
                    Alert.alert("Błąd", "Problem z połączeniem z serwerem!")
                }
            })
    }
    return (
        <View style={style.default}>
            <ImageBackground source={require('../assets/background.png')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/icon.png')} style={{ width: 200, height: 200, resizeMode: 'stretch', marginBottom: 25 }} />
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
                <Pressable onPress={() => console.log("Zapomniało się")}>
                    <Text>Zapomniałeś hasła?</Text>
                </Pressable>
                <MyModal />
                <Pressable style={style.loginBtn} onPress={() => { Verify() }}><Text>Zaloguj</Text></Pressable>
            </ImageBackground>
        </View>
    );
}

const style = StyleSheet.create({
    default: {
        flex: 1,
    },
    input: {
        backgroundColor: "#40F98F",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
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
