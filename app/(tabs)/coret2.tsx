import { Background } from "@react-navigation/elements";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
import { use, useState } from "react";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import * as Medialibrary from "expo-media-library";
import { Audio } from "expo-av";

export default function App(){
    const [isPlay, setIsPlay] = useState(false);
    const router = useRouter();
    const [daftarMusic, setDaftarmusic] = useState([]);
    const [lagu, setLagu] = useState<Medialibrary.Asset[]>([]);
    const playMusic = async ( item: Medialibrary.Asset) => {
        const { sound } = await Audio.Sound.createAsync(
            {uri : item.uri},
            {shouldPlay : true}
        );
    };
    
    useEffect(() => {
        const ambilLagu = async() => {
        const { status } =  await Medialibrary.requestPermissionsAsync();
        
        if(status !== "granted") {
            alert("kok di tolak 😠");
            return;
        }
        const hasil = await Medialibrary.getAssetsAsync({mediaType:
            Medialibrary.MediaType.audio,
            first: 1000,
        });

        setLagu(hasil.assets);
    };
    ambilLagu();
}, []);

    return(
        <View style={styles.main}>
            <View style={styles.judulLagu}>
                <TouchableOpacity style={styles.kembali} onPress={()=> {router.push("/(tabs)")}}>
                    <Text> kembali </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.daftarMusic}>
                {lagu.map((item) => (<View key={item.id} style={styles.itemLagu}>
                    <Text numberOfLines={1}>
                        {item.filename}
                    </Text>
                </View>))}
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
    },
    itemLagu: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: "#ccc",
}


})