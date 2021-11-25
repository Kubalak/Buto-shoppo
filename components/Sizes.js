import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Sizes(props) {

    return(

        <Text numberOfLines={1} style={style.default}>{props.props.join(", ")}</Text>
    )
}

const style = StyleSheet.create({
    default:
    {
        fontWeight: 'bold',
    }
});