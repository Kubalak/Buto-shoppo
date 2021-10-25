import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';

export default function TopBar(){
    return(
        <NavigationContainer>
            <Text style={style.default}>This is a text.</Text>
        </NavigationContainer>
    );
}

const style = StyleSheet.create({
    default:
    {
        backgroundColor: '#000',
        alignContent: 'center',
        textAlignVertical: 'top',
        justifyContent: 'center',
        color: '#fff',
    },
});