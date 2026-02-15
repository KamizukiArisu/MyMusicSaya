import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";

export default function App(){
    // tempan menyimpan music 
    const [daftar, setDaftar] = useState<MediaLibrary.Asset[]>([]);
    const [permissionResponse, requestResponse] = MediaLibrary.usePermissions();
    
    const getMusic= async () => {
        // minta izin buat ambil
        const promise = await MediaLibrary.getPermissionsAsync();
        // kalo udah dapet izin di apain? ⬇️
        if(promise.granted){
            // jika di izinkan ambil media type audio
            const music = await MediaLibrary.getAssetsAsync({mediaType: "audio"});
            // simpan ke useState 
            setDaftar(music.assets)
        }
    }
    useEffect(() => {getMusic()},
[]);


    return(
        <View>
            {daftar.map((lagu) => (<Text key={lagu.id}>{lagu.filename}</Text>))}
        </View>    
    )
}