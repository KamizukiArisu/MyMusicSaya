import { Background } from "@react-navigation/elements";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import { useRouter } from "expo-router";
export default function App(){

    const [isPlay, setIsPlay] = useState(false);

    const router = useRouter();

    const [daftarMusic, setDaftarmusic] = useState(["lagu 1", "lagu 2", "lagu 3","lagu 4", "lagu 5","lagu 6", "lagu 7", "lagu 8", "lagu 9","lagu 10", "lagu 11","lagu 12", "lagu 13", "lagu 14", "lagu 15","lagu 16", "lagu 17","lagu 18"]);
    return(
        <View style={styles.main}>
            <View style={styles.judulLagu}>
                <TouchableOpacity style={styles.kembali} onPress={()=> {router.push("/(tabs)")}}>
                    <Text> kembali </Text>
                </TouchableOpacity>
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
                <TouchableOpacity style={styles.tombol} onPress={() => setIsPlay(!isPlay)}>
                    <Image style={{width:35, height:35}} source= {isPlay ? require("../../assets/images/pause2.jpg") : require("../../assets/images/Play.jpg")}>{}</Image>
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
    kembali:{
        justifyContent:"center",
        alignItems:"flex-end",
        borderColor:"black",
        borderWidth:3,
        height:30,
        width:60,
        right:5
    },
    judulLagu:{
        margin:10,
        backgroundColor:"white",
        borderWidth:3,
        borderColor:"black",
        height:40,
        width:320,
        bottom:25,
        justifyContent:"flex-end",
        flexDirection:"row",
        alignItems:"center",
        
        

    },
    daftarMusic:{
        bottom:30,
        borderWidth:3,
        borderColor:"black",
        width:320,
        maxHeight:550,
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