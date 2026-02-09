import { Background } from '@react-navigation/elements';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import { DEFAULT_ICON_SIZE } from '@expo/vector-icons/build/createIconSet';

export default function App() {

  const [url, setUrl] = useState('');

  const [view, setView] = useState(false);

const handleDownload = async () => {
    // 1. Cek dulu apakah link ada isinya
    if (url.trim() === "") {
      Alert.alert("Kosong", "Isi dulu link-nya bos!");
      return;
    }

    try {
      // 2. Beri tahu user kalau proses mulai
      console.log("Menghubungi server: 192.168.1.3");
      
      // 3. Inilah FETCH: Mengirim link ke laptop kamu
      const response = await fetch(`http://192.168.1.3:4000/download?url=${url}`);
      // 4. Cek apakah laptop berhasil memproses
      if (response.ok) {
        Alert.alert("Berhasil!", "Laptop sedang mendownload lagu untukmu.");
      } else {
        Alert.alert("Gagal", "Server laptop ada, tapi dia menolak link ini.");
      }
    } catch (error) {
      // 5. Jika HP tidak bisa konek ke laptop sama sekali
      console.log("Detail Error:", error);
      Alert.alert("Error Koneksi", "HP nggak bisa nemu laptop. Pastikan WiFi sama dan server di laptop sudah NYALA (node server.js)");
    }
  };

  return(
  <View style={styles.Background}>
    <View>
        <Text style={{color:"black", textAlign:"center", fontSize:50}}>PETUNJUK</Text>
    <View style={styles.borderPetunjuk}>
      <Text>1.Masukkan link youtube di bawah</Text>
      <Text>2.setelah memencet download akan mendownload music dari youtube</Text>
      <Text>3.setelah selesai anda bisa memutar music anda di sebelah</Text>
    </View>
    </View>
      <TextInput placeholder='masukkan link di sini' style={styles.borderLink}
      value={url} onChangeText={(text)=>setUrl(text)}></TextInput>
      <TouchableOpacity style={styles.buton} onPress={handleDownload}>
        <Text> DOWNLOAD </Text>
      </TouchableOpacity>
      <View style={styles.borderRiwayat}>
        <View>
          <Text style={{fontSize:30,}}>
            riwayat:
            </Text>
            <Text style={{fontSize:20}}>
              terakhir 1
            </Text>
            <Text style={{fontSize:20}}>
              terakhir 2
            </Text>
            <Text style={{fontSize:20}}>
              terakhir 3
            </Text>
            <Text style={{fontSize:20}}>
              terakhir 4</Text>
            <Text style={{fontSize:20}}>
              terakhir 5</Text>
            <Text style={{fontSize:20}}>
              terakhir 6</Text>
            <Text style={{fontSize:20}}>
              terakhir 7</Text>
        </View>
        <TouchableOpacity style={styles.tombolMusic} >
          <Text style={styles.logoMusic}>➡️</Text>
        </TouchableOpacity>
      </View>
  </View>
  );
}
const styles = StyleSheet.create({
  Background:{
    backgroundColor:"cyan",
    flex: 1,
    alignItems:"center",
    paddingTop:30,

  },
  buton:{
    padding:3,
    margin:10,
    width:90,
    height:30,
    borderWidth:1,
    borderColor:"black",
    borderRadius:3,
    flexDirection:"row",
    justifyContent:"center",
    backgroundColor:"white",
  },
  borderPetunjuk:{
    padding:15,
    margin:10,
    borderWidth:3,
    borderColor:"black",
    backgroundColor:"white",
    flexDirection:"column",
  },
  borderLink:{
    borderWidth:3,
    width:250,
    height:45,
    backgroundColor:"white"
  },
  borderRiwayat:{
    margin:15,
    padding:12,
    borderColor:"black",
    borderRadius:3,
    borderWidth:3,
    alignItems:"flex-start",
    width:300,
    height:280,
    backgroundColor:"white",
  
  },
  logoMusic:{
    fontSize:30,
    bottom:1.3
  },
  tombolMusic:{
    borderColor:"black",
    borderWidth:3,
    position:"absolute",
    backgroundColor:"white",
    right:-3,
    bottom:-55
  }
})