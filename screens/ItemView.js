import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

export default function ItemView({route, navigation})
{
    props = route.params.props; //Zdobywamy informacje o produkcie który oglądamy
    return(
    <View style={style.default}>  
        <Image source={{uri:props.uri}} style={style.image}/>
        <Text style={style.titleText}>
            {props.title}
        </Text>
        
    </View>
    );
}

const style = StyleSheet.create({

    default:{
        width:'100%',
        height:300,
        marginTop:5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f2f2f2',      
    },

    image:{
        width: 300,
        height: 210,
        borderRadius:25,
        overflow: 'hidden',
        borderWidth:1,
        borderColor:'gray',
        shadowColor: '#202020',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5,
        
    },

    titleText:{
        fontSize:20,
        fontStyle:'italic',
        fontWeight:'bold',
        
    }
})