import React, {useState} from "react";
import { View, StyleSheet, Text, Image, Pressable,TouchableOpacity } from "react-native";
import { Items } from "../storage/items";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import {Button,Modal,} from "native-base"

export default function CartItem({props})
{
    const navigation = useNavigation();
    const [amount, setAmount] = useState(0);
    const [showModal, setShowModal] = useState(false)
   
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
            setShowModal(false);
            Items.cart.ForceUpdate
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
        
        <Text style={style.fontSettingsTitle}>
            {elem.title}
        </Text>

        <Image source={{uri:elem.uri}} style ={style.image}/>
        

        
        <Text style={style.fontSettingsRest}>
            <View style={style.Arrows}>
            <Pressable onPress={()=>DecreaseAmount(elem.key)}>
                <FontAwesomeIcon icon="arrow-left" size={25}/>
            </Pressable>
            </View>
                            Ilość: {elem.amount}

            <View style={style.Arrows}>
            <Pressable onPress={()=>IncreaseAmount(elem.key)}>
                <FontAwesomeIcon icon="arrow-right" size={25}/>
            </Pressable>
            </View>
        </Text>
        
        
<View style={style.TrashBin}>   
        <Pressable onPress={()=>setShowModal(true)}>
            <FontAwesomeIcon icon="trash" size={24}/>
        </Pressable>
        
<View>    
    <Modal isOpen={showModal} onClose={()=>setShowModal(false)}>
        <Modal.Content maxWidth='400px'>
          <Modal.Header alignContent='center'>Usuwanie prodktu {elem.title} </Modal.Header>
            <Modal.Body>
                Czy jesteś pewny że chcesz usunąć ten element z koszyka?
            </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                         <Button variant="ghost" colorScheme="blueGray" onPress={() => {setShowModal(false)}}>
                             Anuluj
                         </Button>
                        
                         <Button variant='solid' onPress={()=>DeleteItem(elem.key)}>
                                Potwierdź
                         </Button>
                    </Button.Group>
                </Modal.Footer>
        </Modal.Content>
      </Modal>
</View>

</View> 
        

        <Text style={style.fontSettingsRest}>
        Cena za pare: {elem.price} zł 
        </Text>

        <Text style={style.fontSettingsRest}>
        Cena całkowita: {(elem.amount * elem.price).toFixed(2)} zł 
        </Text> 


        </View>
    );
}




const style = StyleSheet.create({

    default:{
        width:'100%',
        height:320,
        marginBottom:5,
        marginTop:5,
        elevation: 6,
        borderRadius:60,
        shadowRadius:10,
        shadowColor:'black',
        shadowOpacity:10,
        shadowOffset:{widht: 0, height: 5},
        backgroundColor:'#F5F5F5',
        alignItems:'center',
        
    },

    image:{
        width:190,
        height:190,
        borderRadius:70,
        borderWidth:1,
        resizeMode: 'stretch',
    },

    fontSettingsTitle:{
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic',
        
    },

    fontSettingsRest:
    {
        fontSize:18,  
    }
    ,

    TrashBin:
    {
        width:30,
        borderRadius:50,
        backgroundColor:'red',
        alignItems:'center',
    }
    ,

    Arrows:
    {
        marginRight:20,
        width:30,
        borderRadius:50,
        backgroundColor:'#93f600',
        alignItems:'center',
    }
})