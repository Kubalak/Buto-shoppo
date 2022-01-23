import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Items } from "../storage/items";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { Button, Modal, Spinner, Heading } from "native-base";
import createInstance from "../config";

const axiosInstance = createInstance();

export default function CartItem({ props, reloadFunc}) {
    //TODO: Przekierowanie na widok oferty sprzedaży.

    const navigation = useNavigation();
    const [amount, setAmount] = useState(0);
    const [showModal, setShowModal] = useState(false)
    const [element, setElement] = useState(null);

    useEffect(() => {

        axiosInstance.get("/get",
            {
                params: {
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
        reloadFunc(Items.cart)
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
            <View style={style.product}>
                <Image source={{ uri: element.uri }} style={style.image} />
            </View>

            <View style={{ flex: 1 }}>
                <View style={{alignItems:'center', marginBottom: 5}}>
                    <Text style={style.fontSettingsTitle}>
                        {element.title}
                    </Text>
                </View>
                <Text style={style.fontSettingsRest}>
                    Cena za parę: {element.price} zł
                </Text>
                <Text style={style.fontSettingsRest}>
                    Cena całkowita: {(parseFloat(element.price) * props.amount).toFixed(2)} zł
                </Text>
                <View style={style.changeComp}>
                    <Text style={style.fontSettingsRest}>Ilość:</Text>
                        <View style={style.changeAmount}>
                            <TouchableOpacity style={style.touch} onPress={() => IncreaseAmount(element.key)}>
                                <FontAwesomeIcon icon="caret-up" size={25} />
                            </TouchableOpacity>
                            <Text>{props.amount}</Text>
                            <TouchableOpacity style={style.touch} onPress={() => DecreaseAmount(element.key)}>
                                <FontAwesomeIcon icon="caret-down" size={25} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={style.touch} onPress={() => setShowModal(true)}>
                            <FontAwesomeIcon icon="trash" size={24} />
                        </TouchableOpacity>                    
                </View>
            </View>
            <View style={style.TrashBin}>
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
        </View>
    );

}




const style = StyleSheet.create({

    default: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        marginTop: 5,
        padding: 5,
        elevation: 6,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        flexDirection: 'row'

    },
    product: {
        alignItems: 'center',
        marginRight: 5,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 30,
        borderWidth: 1,
        resizeMode: 'stretch',
    },

    fontSettingsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

    fontSettingsRest:
    {
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Arrows:
    {
        alignItems: 'center',
    },
    touch: {
        width: 20,
        height: 20,
    },
    changeComp: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    changeAmount: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 15,
    }
})