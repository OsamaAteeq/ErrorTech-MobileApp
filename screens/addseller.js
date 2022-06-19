import React,{ useContext, useState } from 'react';
import { View, Text,Alert , DevSettings, Dimensions, ScrollView, Pressable, Image} from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { AuthContext } from '../Files/AuthProvider';
import ImagePicker from 'react-native-image-crop-picker';

import storage from '@react-native-firebase/storage';


function addseller ({navigation}) {
  var w_height = Dimensions.get('window').height;
var w_width = Dimensions.get('window').width;
  var size = w_width<w_height? w_width:w_height;
  var b_width = size/2;
  var i_height = b_width-(b_width/5);

  const [name, setName] = useState('');m
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fblink, setFblink] = useState('');
  const [replink, setReplink] = useState('');
  const [img, setImg] = useState(null);
  const [comp, setComp] = useState(false);

  const imgpick=()=>{

      Alert.alert(
        "Choose Method",
        "From where do you want to get image",
        [
          { text: "Cancel",
           onPress: () => {} 
        }
        ,
        {
            text: "Gallery",
            onPress: () => {
              ImagePicker.openPicker({
                cropping: false
              }).then(image => {
                console.log(image);
              });
            }
        }
          ,
          { text: "Camera",
           onPress: () => {ImagePicker.openCamera({
            cropping: false,
          }).then(image => {
            console.log(image);
          });} 
        }
        ]
      );
    
}

function a (){return(<View style={{alignItems:"center", justifyContent:"center" ,borderColor:"white", width:b_width, height:i_height, borderRadius:6, borderWidth:2}}>
<Text style={{color:"#F5F5F5"}}>Press to select</Text>
<Text style={{color:"#F5F5F5"}}>display image </Text></View>);}

function b (){return(<View style={{alignItems:"center", justifyContent:"center" ,borderColor:"white", width:b_width, height:i_height, borderRadius:6, borderWidth:2}}>
<Image source={img} style={{width:b_width, height:i_height}}></Image></View>);}

    return (
        <ScrollView style={{flex:1, backgroundColor:"#2D2D2D"}}>
        <View style={{backgroundColor:"black", alignItems:"center", padding:"2.5%"}}>
        <Text style={{color:"#FDFE02", fontSize:32, fontWeight:"bold"}}>ADD SELLER</Text>
      </View>
      <View style={{alignItems:"center", marginTop:"10%"}}>
        <Pressable onPress={()=>{imgpick()}} style={{marginBottom:"10%"}}>
            {img==null?a():b()}
        </Pressable>
      <TextInput style={{width:"90%", shadowColor:"#2D2D2D", borderColor:"#2D2D2D", marginBottom:"10%"}}
       mode="outlined"
       onChangeText={setName}
       value={name}
       label="Name"
       theme={{ roundness: 200 }}>

      </TextInput>
      <TextInput style={{width:"90%", shadowColor:"#2D2D2D", borderColor:"#2D2D2D", marginBottom:"10%"}}
       mode="outlined"
       onChangeText={setEmail}
       value={email}
       label="Email"
       theme={{ roundness: 200 }}>

      </TextInput>
      <TextInput style={{width:"90%", shadowColor:"#2D2D2D", borderColor:"#2D2D2D", marginBottom:"10%"}}
       mode="outlined"
       onChangeText={setPhone}
       value={phone}
       keyboardType='numeric'
       label="Phone"
       theme={{ roundness: 200 }}>

      </TextInput>
      <TextInput style={{width:"90%", shadowColor:"#2D2D2D", borderColor:"#2D2D2D", marginBottom:"10%"}}
       mode="outlined"
       onChangeText={setFblink}
       value={fblink}
       label="Facebook Link"
       theme={{ roundness: 200 }}>

      </TextInput>

      <TextInput style={{width:"90%", shadowColor:"#2D2D2D", borderColor:"#2D2D2D", marginBottom:"10%"}}
       mode="outlined"
       onChangeText={setReplink}
       value={replink}
       label="Reputation Link"
       theme={{ roundness: 200 }}>

      </TextInput>

        <View style={{flexDirection:"row"}}>
        <Button
          mode="contained"
          style={{
            width:b_width,
            padding:"2%",
            backgroundColor: '#FF0000',
            borderRadius: 200,
            marginBottom:"10%"
          }}
          onPress={() => {}}>
          <Text style={{color:"black", fontWeight:"bold"}}>CLEAR</Text>
        </Button>

      <Button
          mode="contained"
          style={{
            width:b_width,
            padding:"2%",
            backgroundColor: '#FDFE02',
            borderRadius: 200,
            marginBottom:"10%"
          }}
          onPress={() => {}}>
          <Text style={{color:"black", fontWeight:"bold"}}>ADD</Text>
        </Button>
        </View>
      </View>
      </ScrollView>
    )
  }

  export default addseller;