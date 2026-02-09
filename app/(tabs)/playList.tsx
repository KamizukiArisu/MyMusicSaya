import { Background } from "@react-navigation/elements";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
export default function App(){
    const [isPlay, setIsPlay] = useState(false)
    const [daftarMusic, setDaftarmusic] = useState(["lagu 1", "lagu 2", "lagu 3","lagu 4", "lagu 5","lagu 6"]);
    return(
        <View style={styles.main}>
            <View style={styles.judulLagu}>
                <Text></Text> 
            </View>
            <ScrollView style={styles.daftarMusic}>
                {daftarMusic.map((judul, index) =>(
                    <TouchableOpacity key={index}>
                        <View style={{padding:10, backgroundColor:"white", margin:3, borderWidth:3,borderColor:"black"}}>
                            <Text>{judul}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.musicDiputar}>
                <Text>music yang di putar</Text>
                <TouchableOpacity style={styles.tombol}>
                    <Image source={require("../../assets/images/pause2.jpg")} style={{width:35, height:35}}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:"lightblue",
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
    judulLagu:{
        margin:20,
        backgroundColor:"white",
        borderWidth:3,
        borderColor:"black",
        height:40,
        width:320,
        justifyContent:"center",
        alignItems:"center",
    },
    daftarMusic:{
        borderWidth:3,
        borderColor:"black",
        width:320,
        maxHeight:600,
        backgroundColor:"lightblue"
    },
    musicDiputar:{
        position:"absolute",
        borderWidth:3,
        bottom:30,
        width:300,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        flexDirection:"row"
        
    },
    tombol:{
        position:"absolute",
        width:50,
        height:50,
        borderWidth:3,
        right:-3,
        justifyContent:"center",
        alignItems:"center",
    }

})