import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text,Button , View, Alert, TouchableOpacity,StatusBar, Platform} from 'react-native';

function Menu(){
    Alert.alert('You have pressed menu!');
}
function Cart(){
    Alert.alert('You have pressed cart!');
}

export default function TopBar(){
    //console.log(style.default.height)
   // console.log(style.default.paddingTop)
    return(
      <View style={style.default}>
          <TouchableOpacity style={{paddingLeft: 20}}onPress={Menu}>
              <FontAwesome style={{color:'black', fontSize: 20}}name="bars"/>
            </TouchableOpacity>
          <TouchableOpacity style={{paddingRight: 20}} onPress={Cart}>
          <FontAwesome style={{color:'black', fontSize: 20}}name="shopping-cart"/>
          </TouchableOpacity>
      </View>  
    );
}

const style = StyleSheet.create({
    default:
    {
        width: '100%',
        color: 'black',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 80,
        borderRadius: 10,
        shadowRadius: 10,
        shadowOffset: {width: 1, height: 5},
        shadowColor: '#000',
        shadowOpacity: 1.0,
        elevation: 5,
    },
});