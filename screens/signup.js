import React, { useState, useEffect, useContext } from 'react';
import { TextInput, Button, IconButton } from 'react-native-paper';
import { View, Text, Pressable, Alert, Dimensions, ScrollView } from 'react-native'
import { AuthContext } from '../Files/AuthProvider';

function first ({navigation}) {
  var w_height = Dimensions.get('window').height;
var w_width = Dimensions.get('window').width;
  var size = w_width<w_height? w_width:w_height;
  var b_width = size/2;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');

  const{register} = useContext(AuthContext);

  var check=()=>{
    if(name!='' && pass!=''&& email!=''&& repass!=''){
    if(pass.length<6)
    {
      Alert.alert("Password must be atleast 6 characters");
    }
    else if(pass !== repass)
    {
      Alert.alert("Password mismatch");
    }
    else
    {
      register(email,pass, name);
      
    }
  }
  else
  {
    Alert.alert("All fields are required");
  }
  }

    return (
      <ScrollView style={{flex:1, backgroundColor:"#2D2D2D"}}>
      <View style={{backgroundColor:"black", alignItems:"center", padding:"2.5%"}}>
        <Text style={{color:"#FDFE02", fontSize:32, fontWeight:"bold"}}>SIGN UP</Text>
      </View>
      <View style={{alignItems:"center", marginTop:"10%"}}>
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
      <TextInput style={{width:"90%", shadowColor:"#2D2D2D", borderColor:"#2D2D2D"}}
       mode="outlined"
       onChangeText={setPass}
       value={pass}
       secureTextEntry
       label="Password"
       theme={{ roundness: 200 }}>

      </TextInput>
      <Text style={{color:"#F5F5F5", marginBottom:"9%"}}>Password must be atleast 6 characters</Text>
      <TextInput style={{width:"90%", shadowColor:"#2D2D2D", borderColor:"#2D2D2D", marginBottom:"10%"}}
       mode="outlined"
       onChangeText={setRepass}
       value={repass}
       secureTextEntry
       label="Re-enter password"
       theme={{ roundness: 200 }}>

      </TextInput>

      <Button
          mode="contained"
          style={{
            width:b_width,
            padding:"2%",
            backgroundColor: '#FDFE02',
            borderRadius: 200,
            marginBottom:"10%"
          }}
          onPress={() => check()}>
          <Text style={{color:"black", fontWeight:"bold"}}>SIGN UP</Text>
        </Button>
        <Text style={{color:"#F5F5F5"}}>Already have an account? </Text>
        <Pressable
        onPress={()=>navigation.navigate('ERROR TECH')}
      >
        <Text style={{color:"#609FFF", marginBottom:"9%", textDecorationLine:"underline",textDecorationStyle: "solid",textDecorationColor: "#609FFF"}}>Sign in</Text>
        </Pressable>
      </View>
      </ScrollView>
    )
  }

  export default first;