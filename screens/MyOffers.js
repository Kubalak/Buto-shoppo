import React, {useState, useEffect} from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';
import OfferItem from '../components/OfferItem';
import axios from 'axios';

const axiosInstance = axios.create();

export default function MyOffers({navigation})
{
    const [data, setData] = useState(null);
    useEffect(() => {
      axiosInstance.get("/get",
      {
        params:{
          myoffers: true
        }
      }).then( function(response){ //Uses enviromental variables in the .env file
          setData(response.data);
        })
        .catch(function (error){
          console.log(error);
        })
  
    }, []);

    return(
    <View style={style.default}>
        <FlatList 
            data={data}
            renderItem={({item}) => <OfferItem navigation={navigation} offer={item}/>}
        />
    </View>
    );
}

const style = StyleSheet.create({
    default: {
        flex:1,
        backgroundColor: 'white'
    }
})