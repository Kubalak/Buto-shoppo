import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, Text,Button , View, Alert, TouchableOpacity,StatusBar, Platform} from 'react-native';
import {Cart,Menu,Home,Login} from '../screens/index';
import CartBar from './CartBar';

/*function Menu(){
    Alert.alert('You have pressed menu!');
}
function Cart(){
    Alert.alert('You have pressed cart!');
}*/

const Stack = createNativeStackNavigator();

export default function HomeNavigation(){
    //console.log(style.default.height)
   // console.log(style.default.paddingTop)
    return(
      <NavigationContainer>
          <Stack.Navigator >
          <Stack.Screen
             name="login"
             component={Login}
             options={{headerShown: false}}
            />
              <Stack.Screen
             name="home"
             component={Home}
             options={{headerShown: false}}
            />
            <Stack.Screen
             name="cart"
             component={Cart}
             options={({navigation, route})=> ({
               headerTitle: (props) => <CartBar navigation={navigation}/>,
             })}
            />
            
          </Stack.Navigator>
      </NavigationContainer>  
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
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 1.0,
        elevation: 5,
    },
});