import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import {Cart,Home,Login,ItemView, OfferView} from '../screens/index';
import CartBar from './CartBar';
import ItemViewBar from './ItemViewBar';

const Stack = createNativeStackNavigator();

export default function HomeNavigation(){
    return(
      <NavigationContainer>
          <Stack.Navigator screenOptions={{
             headerStyle:{
              backgroundColor: '#FFFFFF'
          }
          }} initialRouteName="login">
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
            <Stack.Screen
             name="itemView"
             component={ItemView}
             options={({navigation, route})=> ({
               headerTitle: (props) => <ItemViewBar props={route.params.props}/>,
             })}
            />
            <Stack.Screen
             name="offerView"
             component={OfferView}
             options={({navigation, route})=> ({
               headerTitle: (props) => <ItemViewBar props={route.params.props}/>,
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