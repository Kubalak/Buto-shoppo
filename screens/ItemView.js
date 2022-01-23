import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useToast } from 'native-base';
import { Items } from '../storage/items';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Sizes from '../components/Sizes';
import Colours from '../components/Colours';

export default function ItemView({ route, navigation }) {
    props = route.params.props; //Zdobywamy informacje o produkcie który oglądamy
    props.price = parseFloat(props.price)
    const toast = useToast();
    function AddToCart(){
        
        let item = null;
        if(Items.cart.length > 0)
        {
            
            for (var i = 0; i < Items.cart.length; i++)
            {
                if(Items.cart[i].key !== undefined && Items.cart[i].key === props.key)
                {
                    Items.cart[i].amount++;
                    item = props.title;
                    break;
                }
                else if(i === Items.cart.length - 1)
                {
                    Items.cart.push({key: props.key, amount: 1});
                    item = props.title;
                }
            }
        }
        else
        {
            Items.cart.push({key: props.key, amount: 1});
            item = props.title;
        }

        toast.show({
        title: "Nowy zakup",
        status: "success",
        description: item +"\nDodano element do koszyka",
        duration: 1500
        })
    }
    return (
        <View style={style.default}>
            <View style={style.header}>
                <Image source={{ uri: props.uri }} style={style.image} />
                <Text style={style.titleText}>
                    {props.title}
                </Text>
            </View>
            <View style={style.info}>
                <View style={{ alignItems: 'center' }}><Text style={style.infoTitle}>Informacje o produkcie:</Text></View>
                <View style={{ paddingLeft: 25 }}>
                    <Text style={style.infoText}>Materiał wykonania: <Text style={{ fontWeight: 'bold' }}>{props.material}</Text></Text>
                    <Text style={style.infoText}>Dostępne rozmiary: <Sizes props={JSON.parse(props.availableSizes)} /></Text>
                    <Text style={style.infoText}>Dostępne kolory: <Colours props={JSON.parse(props.availableColours)} /></Text>
                    <Text style={style.infoText}>Cena za parę: <Text style={{ fontWeight: 'bold' }}>{props.price.toFixed(2).toString().replace('.', ',')} zł</Text></Text>
                </View>
            </View>
            <TouchableOpacity style={style.addToCart} onPress={() => AddToCart()}><Text style={{fontSize: 16}}>Dodaj do koszyka <FontAwesomeIcon icon="cart-plus" size={18}/></Text></TouchableOpacity>

        </View>
    );
}

const style = StyleSheet.create({

    default: {
        width: '100%',
        height: 300,
        padding: 10,
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    header: {
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 25,
        overflow: 'hidden',
        marginBottom: 5,
    },

    titleText: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',

    },
    info: {
        marginTop: 20,
    },
    infoTitle: {
        fontSize: 18,
    },
    infoText: {
        fontSize: 16,
        lineHeight: 25,
        marginTop: 5,
    },
    addToCart:{
        width: 200,
        height: 50,
        elevation: 2,
        backgroundColor: '#40F98F',
        borderRadius: 12,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    }
})