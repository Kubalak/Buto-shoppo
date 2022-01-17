import React, {useState, useEffect} from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';
import OfferItem from '../components/OfferItem';
import { Spinner, HStack, Heading } from "native-base";
import Config from "../config";
import axios from 'axios';

const axiosInstance = axios.create();

export default function MyOffers({navigation})
{
    const [data, setData] = useState(null);
    const[isLoading, setIsLoading] = useState(false);

    function getData(){
      setIsLoading(true);
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
        setIsLoading(false);
    }

    useEffect(() => {
      getData();
    }, []);

    if(data === null || isLoading)
    {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
          <HStack space={2} alignItems="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
              Ładowanie...
            </Heading>
          </HStack>
        </View>
      );
    }

    return(
    <View style={style.default}>
        <FlatList 
            data={data}
            renderItem={({item}) => <OfferItem navigation={navigation} offer={item}/>}
            onRefresh={() => getData()}
            refreshing={isLoading}
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