import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { Items } from "../storage/items";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { Button, Modal, Spinner, Heading } from "native-base";
import axios from "axios";
import { API_HOST, API_URL, APP_TOKEN } from "@env";

export default function CartItem({ props }) {
    const navigation = useNavigation();
    const [amount, setAmount] = useState(0);
    const [showModal, setShowModal] = useState(false)
    const [element, setElement] = useState(null);

    useEffect(() => {
        axios.get(`http://${API_HOST}/${API_URL}/get`,
            {
                headers: {
                    'Authorization': `Basic ${APP_TOKEN}`
                },
                params:{
                    key: props.key
                },
                
            }).then(function (response) { //Uses enviromental variables in the .env file
                setElement(response.data[0]);
            })
            .catch(function (error) {
                console.log(error);
                //setData(Items.shopItems);
            })
    }, []);


    function listRemove(arr, key) {

        return arr.filter(function (ele) {
            return ele.key != key;
        });
    }

    function IncreaseAmount(key) {
        for (var item of Items.cart) {
            if (key === item.key) {
                item.amount++;
                setAmount(item.amount);
                break;
            }
        }

    }

    function DecreaseAmount(key) {
        for (var item of Items.cart) {
            if (key === item.key) {
                if (item.amount > 1)
                    item.amount--;
                setAmount(item.amount);
                break;
            }
        }

    }

    function DeleteItem(key) {
        Items.cart = listRemove(Items.cart, key)
        setShowModal(false);
        Items.cart.ForceUpdate
    }
    /**
     * W przypadku gdy dane się wczytują.
     */
    if (element === null) {
        return (
            <View style={{ ...style.default, justifyContent: 'center' }}>
                <Spinner accessibilityLabel="Loading posts" />
                <Heading color="primary.500" fontSize="md">
                    Ładowanie...
                </Heading>
            </View>
        );
    }


    return (
        <View style={style.default}>

            <Text style={style.fontSettingsTitle}>
                {element.title}
            </Text>

            <Image source={{ uri: element.uri }} style={style.image} />



            <Text style={style.fontSettingsRest}>
                <View style={style.Arrows}>
                    <Pressable onPress={() => DecreaseAmount(element.key)}>
                        <FontAwesomeIcon icon="arrow-left" size={25} />
                    </Pressable>
                </View>
                Ilość: {props.amount}

                <View style={style.Arrows}>
                    <Pressable onPress={() => IncreaseAmount(element.key)}>
                        <FontAwesomeIcon icon="arrow-right" size={25} />
                    </Pressable>
                </View>
            </Text>


            <View style={style.TrashBin}>
                <Pressable onPress={() => setShowModal(true)}>
                    <FontAwesomeIcon icon="trash" size={24} />
                </Pressable>

                <View>
                    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                        <Modal.Content maxWidth='400px'>
                            <Modal.Header alignContent='center'>Usuwanie prodktu {element.title} </Modal.Header>
                            <Modal.Body>
                                Czy jesteś pewny że chcesz usunąć ten element z koszyka?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button.Group space={2}>
                                    <Button variant="ghost" colorScheme="blueGray" onPress={() => { setShowModal(false) }}>
                                        Anuluj
                                    </Button>

                                    <Button variant='solid' onPress={() => DeleteItem(element.key)}>
                                        Potwierdź
                                    </Button>
                                </Button.Group>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </View>

            </View>


            <Text style={style.fontSettingsRest}>
                Cena za pare: {element.price} zł
            </Text>

            <Text style={style.fontSettingsRest}>
                Cena całkowita: {(parseFloat(element.price) * props.amount).toFixed(2)} zł
            </Text>


        </View>
    );

}




const style = StyleSheet.create({

    default: {
        width: '100%',
        height: 320,
        marginBottom: 5,
        marginTop: 5,
        elevation: 6,
        borderRadius: 60,
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 10,
        shadowOffset: { widht: 0, height: 5 },
        backgroundColor: '#F5F5F5',
        alignItems: 'center',

    },

    image: {
        width: 190,
        height: 190,
        borderRadius: 70,
        borderWidth: 1,
        resizeMode: 'stretch',
    },

    fontSettingsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',

    },

    fontSettingsRest:
    {
        fontSize: 18,
    },
    TrashBin:
    {
        width: 30,
        borderRadius: 50,
        backgroundColor: 'red',
        alignItems: 'center',
    },
    Arrows:
    {
        marginRight: 20,
        width: 30,
        borderRadius: 50,
        backgroundColor: '#93f600',
        alignItems: 'center',
    }
})