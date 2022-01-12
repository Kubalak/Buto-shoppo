import React, {useState, useEffect} from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';
import OfferItem from '../components/OfferItem';
import {API_HOST, API_URL, APP_TOKEN} from "@env";
import axios from 'axios';


export default function MyOffers({navigation})
{
    const [data, setData] = useState(null);
    useEffect(() => {
      axios.get(`http://${API_HOST}/${API_URL}/get?myoffers=true`,
      {
        headers:{
          'Authorization': `Basic ${APP_TOKEN}`
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