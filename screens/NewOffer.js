import React from 'react';
import {View,Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// Hierr na razie nic nie zmieniać pole do testów FontAwesomeIcon!!!

export default function NewOffer({navigation})
{
    return(
    <View style={{backgroundColor:'white', flex: 1}}>
        <Text>
            Tutaj powinien być formularz do tworzenia nowej strony.
        </Text>
        <FontAwesomeIcon icon="trash" size={85}/>
        <FontAwesomeIcon icon="deaf" size={99}/>
        <FontAwesomeIcon icon="radiation" style={{padding: 5, backgroundColor: 'yellow', borderRadius: 15}} size={120}/>
        <FontAwesomeIcon icon="spider" size={105} color="#CCBEDA"/>
        <FontAwesomeIcon icon="tty" size={205}/>
    </View>
    );
}