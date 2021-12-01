import React, {useState} from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Items } from "../storage/items";
import { FontAwesome } from '@expo/vector-icons';

export default function CartItem({props})
{
    const [amount, setAmount] = useState(0);
   
function listRemove(arr, key) { 
    
        return arr.filter(function(ele){ 
            return ele.key != key;   
        });
}    

function IncreaseAmount(key)
{
    console.log("Klucz",key)
    for(var item of Items.cart)
    {
        if(key === item.key)
        {
            console.log(item.amount);
            item.amount++;
            setAmount(item.amount);
            console.log(item.amount);
            break;
        }
    }

}
    
function DecreaseAmount(key)
{
    console.log("Klucz",key)
    for(var item of Items.cart)
    {
        if(key === item.key)
        {
            console.log(item.amount);
            if(item.amount > 1)
            item.amount--;
            setAmount(item.amount);
            console.log(item.amount);
            break;
        }
    }

}

function DeleteItem(key)
{
            Items.cart = listRemove(Items.cart, key)
}

    let elem = null;

    for(var item of Items.shopItems)
    {
        if(props.key === item.key)
        {
            elem = item;
            elem.amount = props.amount;
            break;
        }
    }

    return(
        <View style={style.default}>
        
        <Text>
            {elem.title}
        </Text>

        <Image source={{uri:elem.uri}} style ={style.image}/>
        <Text>
            Ilość: {elem.amount} Cena za pare: {elem.price} zł 
        </Text>

        <Text>
        Cena całkowita: {(elem.amount * elem.price).toFixed(2)} zł 
        
        <Pressable onPress={()=>IncreaseAmount(elem.key)}>

            <FontAwesome name ="arrow-up" size={24}/>

        </Pressable>

        <Pressable onPress={()=>DecreaseAmount(elem.key)}>

            <FontAwesome name ="arrow-down" size={24}/>

        </Pressable>

        <Pressable onPress={()=>DeleteItem(elem.key)}>

            <FontAwesome name ="trash" size={24}/>

        </Pressable>

        </Text> 


        </View>
    );
}




const style = StyleSheet.create({

    default:{
        width:'100%',
        height:200,
        borderColor:'black',
        marginBottom:5,
        marginTop:5,
    },

    image:{
        width:100,
        height:100,
        resizeMode: 'stretch',
        borderColor:'black',
    }
})