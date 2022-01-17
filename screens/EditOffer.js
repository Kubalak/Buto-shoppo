import React from "react";
import NewOffer from "./NewOffer";

export default function EditOffer({navigation,route}){
    return (
        <NewOffer navigation={navigation} route={route.params}/>
    );
}