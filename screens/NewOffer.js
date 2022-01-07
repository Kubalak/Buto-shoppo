import React, {useState} from 'react';
import {View, ScrollView, Text, Alert, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import axios from 'axios';
import {API_HOST, API_URL} from "@env";
import Colours from '../components/Colours';

// Hierr oskryptować formularz!!!

function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

export default function NewOffer({navigation})
{
    const [title, setTitle] = useState('');
    const [material, setMaterial] = useState('');
    const [price, setPrice] = useState(0);
    const [availableSizes, setAvailableSizes] = useState([]);
    const [availableColours, setAvailablecolours] = useState([]);
    const [uri, setUri] = useState('');

    function sendForm()
    {
        axios.post(`http://${API_HOST}/${API_URL}/post`, {
            title: title,
            material: material,
            price: price,
            availableSizes: availableSizes,
            availableColours: availableColours,
            uri: uri
        })
        .then(function(response)
        {   
            console.log(response.data);
        })
        .catch(function(error){
            if(error.response)
            {
                if (error.response.data && error.response.data.data != null && error.response.data.data != undefined)
                    Alert.alert("Błąd serwera","Serwer zwrócił komunikat:\n"+error.response.data.data);
                else console.log(error.response.status);
            }
        })
    }
    
    return(
    <ScrollView style={style.default} nestedScrollEnabled={true}>
        <View style={style.title}>
            <Text style={style.titleText}>Zdjęcie buta</Text>
            <TouchableOpacity style={style.imageContext}>
                {
                uri===''?
                    <View style={style.imageEmpty}>
                        <FontAwesomeIcon icon="image" size={40}/>
                        <View style={style.plusIcon}>
                            <FontAwesomeIcon icon="plus" style={{color:'white'}}size={10}/>
                        </View>
                    </View>
                :
                    <Image source={{uri: uri}} style={style.image}/>
                }
            </TouchableOpacity>
        </View>
        <View style={style.title}>
            <Text style={style.titleText}>Nazwa buta</Text>
            <TextInput
            placeholder='Wprowadź nazwę buta'
            onChangeText={(title)=>setTitle(title)}
            style={style.input}
            />
        </View>
        <View style={style.title}>
            <Text style={style.titleText}>Materiał wykonania</Text>
            <TextInput
            placeholder='Wprowadź nazwę materiału'
            onChangeText={(material)=>setMaterial(material)}
            style={style.input}
            />
        </View>
        <View style={style.title}>
            <Text style={style.titleText}>Cena</Text>
            <TextInput
            placeholder='Wprowadź cenę'
            keyboardType='numeric'
            onChangeText={(price)=>setPrice(price)}
            style={style.input}
            />
        </View>
        <View >
            <Text style={style.titleText}>Dostępne kolory</Text>
            <View style={{marginTop: 10, marginBottom: 10, alignContent: 'center', flexDirection: 'row'}}>
                <Colours  props={availableColours}/>
            </View>
            <TouchableOpacity style={style.addColorBtn}>
                <FontAwesomeIcon icon="plus" size={30} style={style.addColor}/>
            </TouchableOpacity>
        </View>
        <View style={style.title}>
            <Text style={style.titleText}>Dostępne rozmiary</Text>
            <TouchableOpacity style={style.addColorBtn}>
                <FontAwesomeIcon icon="plus" size={30} style={style.addColor}/>
            </TouchableOpacity>
        </View>
        <View style={style.title}>
            <TouchableOpacity style={style.sendForm} onPress={() => sendForm()}><Text>Dodaj ofertę</Text></TouchableOpacity>
        </View>
    </ScrollView>
    );
}

const style = StyleSheet.create({
    default:
    {
        backgroundColor:'white', 
        flex: 1
    },
    title:{
        alignSelf: 'center',
        marginTop: 10, 
    },
    titleText: {
        alignSelf: 'center',
        margin: 5,
        fontSize: 18,
    },
    input:{
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
    }
});