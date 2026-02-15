import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Assets } from "@react-navigation/elements";
import { useState } from "react";


export default function TombolSkipKiri(){
    return(
        <View style={styles.pause}>
            <TouchableOpacity >
                <Image style={styles.ukuran} source={require('../../assets/images//icon_1_lala.png')} ></Image>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    pause:{
        borderColor:"black",
        borderWidth:3,
        width:30,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        margin:2
    },
    ukuran:{
        width:22,
        height:22
    }
})