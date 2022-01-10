import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, Text, Alert, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import axios from 'axios';
import { API_HOST, API_URL, APP_TOKEN } from "@env";
import Colours from '../components/Colours';
import { Camera } from 'expo-camera';
// Hierr oskryptować formularz!!!

function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }



export default function NewOffer({ navigation }) {


    function OfferComponent() {
        const [title, setTitle] = useState('');
        const [material, setMaterial] = useState('');
        const [price, setPrice] = useState('');
        const [availableSizes, setAvailableSizes] = useState([]);
        const [availableColours, setAvailablecolours] = useState([]);
        const [uri, setUri] = useState('');
        const [base64, setBase64] = useState(null);
        const [hasPermission, setHasPermission] = useState(null);
        const [isPhotoTaken, setIsPhotoTaken] = useState(false);
        const [type, setType] = useState(Camera.Constants.Type.back);
        const camera = useRef(null);

        const takePhoto = async () => {
            if (camera) {
                let photo = await camera.current.takePictureAsync({ base64: true, quality: 0.5 });
                setBase64(photo.base64);
                setUri(photo.uri);
            }
        }

        useEffect(() => {
            (async () => {
                const { status } = await Camera.requestCameraPermissionsAsync();
                setHasPermission(status === 'granted');
                setUri('');
            })();
        }, []);


        function Mycam() {
            return (
                <>
                    {(hasPermission === true) ?
                        <Camera style={{ flex: 1, width: 200 }} type={type}
                            ratio={'1:1'}
                            ref={camera}>
                            <View style={style.buttonContainer}>
                                <TouchableOpacity
                                    style={style.button}
                                    onPress={() => {
                                        setType(
                                            type === Camera.Constants.Type.back
                                                ? Camera.Constants.Type.front
                                                : Camera.Constants.Type.back
                                        );
                                    }}>
                                    <FontAwesomeIcon style={style.flip} icon="reply" size={25} />
                                </TouchableOpacity>

                            </View>
                            <View>
                                <TouchableOpacity style={style.takePhoto} onPress={() => takePhoto()} />
                            </View>
                        </Camera> :
                        <View>
                            <Text>Brak uprawnień dostępu do aparatu!</Text>
                        </View>
                    }
                </>

            );
        }

        function sendForm() {
            axios.post(`http://${API_HOST}/${API_URL}/post`, {
                    createdBy: 2,
                    title: title,
                    material: material,
                    price: price,
                    availableSizes: [39,40],//availableSizes,
                    availableColours: ['#ABECDF', "#DDDEEE"],//availableColours,
                    uri: base64
                },
                {
                    headers:{
                    'Authorization': `Basic ${APP_TOKEN}`
                }
            })
                .then(function (response) {
                    if(response.data.data)
                        Alert.alert("Informacja", response.data.data);
                    setTitle('');
                    setMaterial('');
                    setIsPhotoTaken(false);
                    setPrice('');
                    setAvailableSizes([]);
                    setAvailablecolours([]);
                    setBase64(null);
                    setUri('');

                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        if (error.response.data && error.response.data.data != null && error.response.data.data != undefined)
                        {
                            var message = "";
                            if(Array.isArray(error.response.data.data))
                            {
                                error.response.data.data.forEach(element => {
                                    message += element + "\n";
                                });
                            }
                            else message = error.response.data.data;
                            Alert.alert("Błąd serwera", "Serwer zwrócił komunikat:\n" + message);
                        }
                        else {
                            console.log(error.response.status);
                            console.log(error.response.data);
                        }
                    }
                })
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={style.title}>
                    <Text style={style.titleText}>Zdjęcie buta</Text>
                    {
                        uri === '' ?
                            <TouchableOpacity style={style.imageContext} onPress={() => setIsPhotoTaken(true)}>
                                {
                                    isPhotoTaken ? <View style={style.imageEmpty}><Mycam /></View>
                                        :
                                        <View style={style.imageEmpty}>
                                            <FontAwesomeIcon icon="image" size={40} />
                                            <View style={style.plusIcon}>
                                                <FontAwesomeIcon icon="plus" style={{ color: 'white' }} size={10} />
                                            </View>
                                        </View>
                                }
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={style.imageContext} onPress={() => { setUri(''); setIsPhotoTaken(true); }}>
                                <Image source={{ uri: uri }} style={style.image} />
                            </TouchableOpacity>
                    }

                </View>
                <View style={style.title}>
                    <Text style={style.titleText}>Nazwa buta</Text>
                    <TextInput
                        placeholder='Wprowadź nazwę buta'
                        value={title}
                        onChangeText={(title) => setTitle(title)}
                        style={style.input}
                    />
                </View>
                <View style={style.title}>
                    <Text style={style.titleText}>Materiał wykonania</Text>
                    <TextInput
                        placeholder='Wprowadź nazwę materiału'
                        value={material}
                        onChangeText={(material) => setMaterial(material)}
                        style={style.input}
                    />
                </View>
                <View style={style.title}>
                    <Text style={style.titleText}>Cena</Text>
                    <TextInput
                        placeholder='Wprowadź cenę'
                        keyboardType='numeric'
                        value={price}
                        onChangeText={(price) => setPrice(price)}
                        style={style.input}
                    />
                </View>
                <View >
                    <Text style={style.titleText}>Dostępne kolory</Text>
                    <View style={{ marginTop: 10, marginBottom: 10, alignContent: 'center', flexDirection: 'row' }}>
                        <Colours props={availableColours} />
                    </View>
                    <TouchableOpacity style={style.addColorBtn}>
                        <FontAwesomeIcon icon="plus" size={30} style={style.addColor} />
                    </TouchableOpacity>
                </View>
                <View style={style.title}>
                    <Text style={style.titleText}>Dostępne rozmiary</Text>
                    <TouchableOpacity style={style.addColorBtn}>
                        <FontAwesomeIcon icon="plus" size={30} style={style.addColor} />
                    </TouchableOpacity>
                </View>
                <View style={style.title}>
                    <TouchableOpacity style={style.sendForm} onPress={() => sendForm()}><Text>Dodaj ofertę</Text></TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={style.default}>
            <FlatList
                data={[]}
                renderItem={null}
                ListHeaderComponent={() => (<OfferComponent />)}
            />
        </View>
    );
}

const style = StyleSheet.create({
    default:
    {
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        alignSelf: 'center',
        marginTop: 10,
    },
    titleText: {
        alignSelf: 'center',
        margin: 5,
        fontSize: 18,
    },
    input: {
        width: 300,
        height: 50,
        elevation: 4,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    addColor: {
        color: 'darkgray',
        height: 35,
        width: 35,

    },
    addColorBtn:
    {
        alignSelf: 'center',
        elevation: 4,
        backgroundColor: '#40F98F',
        borderRadius: 5,

    },
    imageContext:
    {
        borderRadius: 10,
        elevation: 4,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'stretch'
    },
    imageEmpty:
    {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'

    },
    plusIcon: {
        position: 'absolute',
        backgroundColor: 'black',
        width: 15,
        height: 15,
        color: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        left: '56%',
        top: '39%',
    },
    sendForm: {
        elevation: 4,
        width: 300,
        height: 50,
        backgroundColor: '#40F98F',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 20
    },
    takePhoto: {
        borderColor: '#FFFFFFA8',
        borderWidth: 3,
        borderRadius: 25,
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginTop: '50%',
    },
    text: {
        fontSize: 18,
        color: 'red',
        textAlign: 'right'
    },
    flip: {
        margin: 5,
        color: 'white',
        alignSelf: 'flex-end',
    },
});