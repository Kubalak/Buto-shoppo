import React from 'react';
import {View,Text} from 'react-native';

export default function ItemViewBar(props)
{
    props = props.props;
    return(
    <View style={{backgroundColor:'white', flex: 1}}>
        <Text>
            {props.title}
        </Text>
    </View>
    );
}