import { Background } from "@react-navigation/elements";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import * as MediaLibrary from "expo-media-library";
import Tombol from "./Tombol";
import TombolSkipKiri from "./tombolSkipKiri";
import TombolSkip from "./TombolSkip";
import TombolDaftar from "./Tombol_Daftar";


export default function App(){

    const [isPlay, setIsPlay] = useState(false);
    const router = useRouter();
    const [daftarMusic, setDaftarmusic] = useState(["lagu 1", "lagu 2", "lagu 3","lagu 4", "lagu 5","lagu 6", "lagu 7", "lagu 8", "lagu 9","lagu 10", "lagu 11","lagu 12", "lagu 13", "lagu 14", "lagu 15","lagu 16", "lagu 17","lagu 18"]);
    const [tombolDaftar, setTombolDaftar] = useState(false);

    //gambar pause play
    const play = require('../../assets/images//play_gemini.png');
    const pause = require('../../assets/images/pause_gemini.png');


    const [nyala, setNyala] = useState(true);
    
    
    const [musicDiputar, setMusicDiputar] = useState('Tidak memutar')
    
    
        
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

// Tombol kembali paling dan induk elemen

    <View style={styles.main}>
        <View style={styles.judulLagu}>
            <TouchableOpacity style={styles.kembali} onPress={()=> {router.push("/(tabs)")}}>
                <Text> kembali </Text>
            </TouchableOpacity>
        </View>

{/* daftarMusic */}

    <ScrollView style={styles.daftarMusic} contentContainerStyle={{alignItems:"center"}}>
        {daftarMusic.map((value, index) => (
            <TouchableOpacity style={styles.itemDaftarmusic} onPress={()=> setMusicDiputar(value)}>
                <Text>{value}</Text> 


                {/* ini yang di ubah */}

                
                <View style={styles.tombolmusic}> <TombolDaftar/> </View>
            </TouchableOpacity>))}
    </ScrollView>

{/* Tombol music yang sedang di putar */}

    <View style={styles.musicDiputar}>
        <View style={styles.musicdalam}>
            <Text style={{margin:4}}>{musicDiputar}</Text>
            <View style={styles.kelompokTombol}>
                <TombolSkipKiri/>
                {/* ini yang di ubah */}
                <Tombol/>
                <TombolSkip/>
            </View>
        </View>
    </View>

{/* Penutup view induk */}
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
        marginTop:50,
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
        backgroundColor:"gray",
        
    },
    musicDiputar:{
        justifyContent:"center",
        margin:3,
        backgroundColor:"white",
        borderWidth:3,
        bottom:30,
        width:320,
        height:50,
    },
    musicdalam:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    tombol:{
        position:"absolute",
        width:50,
        height:50,
        borderWidth:3,
        right:-3,
        justifyContent:"center",
        alignItems:"center",
    },
    tombolView:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:30,
        height:30,
    },
    itemDaftarmusic:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderColor:"black",
        padding:12,
        borderWidth:3,
        margin:3,
        backgroundColor:"white",
        width:300,
        height:50,
    },
    tombolmusic:{
        left:12,
        justifyContent:"flex-end",
        alignItems:"center",
        flexDirection:"row",
        width:100,
        height:50,
    },
    kelompokTombol:{
        flexDirection:"row"
    }
})