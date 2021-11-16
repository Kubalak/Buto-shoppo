import React from 'react';
import {View,Text} from 'react-native';

export default function ItemView({route, navigation})
{
    props = route.params.props; //Zdobywamy informacje o produkcie który oglądamy
    return(
    <View style={{backgroundColor:'white', flex: 1}}>
        <Text>
            Widoczek itemku
        </Text> 
        <Text style={{fontWeight: 'bold'}}>
            {props.title}
        </Text>
        
    </View>
    );
}