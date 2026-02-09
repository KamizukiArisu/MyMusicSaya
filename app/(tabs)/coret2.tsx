import { Background } from "@react-navigation/elements";
import React, { useState } from "react";
import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
export default function App(){
    
    return(
    <View style={style.layar}>
        <View>
            <TouchableOpacity style={style.tombol}>
                <Text>halaman selanjutnya</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={style.tombol}>
                <Text>tombol togel</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    tombol:{
        borderColor:"black",
        borderWidth:3,
        width:200,
        height:200,
        justifyContent:"center",
        alignItems:"center"
    },
    layar:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"cyan"
    }
})