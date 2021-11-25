import React from "react";
import { Text,View, FlatList } from "react-native";

function RenderItem({props})
{
    return(
    <View style=
            {{ 
                marginLeft: 10,
                marginTop: 5,
                width: 15,
                height: 15,
                borderRadius: 2,
                backgroundColor: props.colour
            }}
        />
    );
}

export default function Colours({props})
{


    return(
        <>
        <FlatList
        data={props}
        renderItem={({item}) => <RenderItem props={item}/>}
        numColumns={6}
        />
        </>
    );
}

