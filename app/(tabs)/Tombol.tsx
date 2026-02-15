import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Assets } from "@react-navigation/elements";
import { useState } from "react";


export default function Tombol(){
    const play = require('../../assets/images//pause_gemini.png');
    const pause = require('../../assets/images/play_gemini.png');
    const [ganti, setGanti] = useState(true);

    return(
        <View style={styles.border}>
            <TouchableOpacity onPress={() => {setGanti(!ganti)}}>
                <Image style={styles.gambar} source={ganti ? pause : play}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    border:{
        borderColor:"black",
        borderWidth:3,
        width:30,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        margin:2
    },
    gambar:{
        width:22,
        height:22
    }
})