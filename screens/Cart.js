import React from 'react';
import {View,Text, StyleSheet, ScrollView} from 'react-native';

export default function Cart({navigation})
{
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={style.default}>
                <Text>
                    This is cart!
                </Text>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    default:
    {
        backgroundColor: '#fff',
    },

});