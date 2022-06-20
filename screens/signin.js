import React, { useState, useContext } from 'react';
import { TextInput, Button, IconButton } from 'react-native-paper';
import { View, Text, Pressable, Alert, Dimensions, ScrollView} from 'react-native'
import { AuthContext } from '../Files/AuthProvider';

function first ({navigation}) {
  var w_height = Dimensions.get('window').height;
var w_width = Dimensions.get('window').width;
  var size = w_width<w_height? w_width:w_height;
  var b_width = size/2;

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const{login} = useContext(AuthContext);
  const{forgotPassword} = useContext(AuthContext);

  var check=()=>{
    if(pass!=''&& email!=''){
    if(pass.length<6)
    {
      Alert.alert("Password must be atleast 6 characters");
    }
    else
    {
      login(email,pass);
    }
  }
  }
  var forgot= ()=>{
    if(email=='')
    {
      Alert.alert("Please enter email first");
    }
    else 
    {
      Alert.alert(
        "Reset password",
        "Are you sure you want to reset password for "+email,
        [
          {
            text: "No",
            onPress: () => {},
            style: "cancel"
          },
          { text: "Yes", onPress: () => {
            Alert.alert("Password reset email sent")
            forgotPassword(email)
          } }
        ]
      );
    }
  }

    return (
      <ScrollView style={{flex:1, backgroundColor:"#2D2D2D"}}>
      <View style={{backgroundColor:"black", alignItems:"center", padding:"2.5%"}}>
        <Text style={{color:"#FDFE02", fontSize:32, fontWeight:"bold"}}>SIGN IN</Text>
      </View>
      <View style={{flex:1, alignItems:"center", marginTop:"10%", justifyContent:"center"}}>
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
      <Pressable
        onPress={()=>forgot()}
      >
        <Text style={{marginLeft:"50%", color:"#609FFF", marginBottom:"9%", textDecorationLine:"underline",textDecorationStyle: "solid",textDecorationColor: "#609FFF"}}>Forgot Password?</Text>
        </Pressable>

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
          <Text style={{color:"black", fontWeight:"bold"}}>SIGN IN</Text>
        </Button>
        <Text style={{color:"#F5F5F5"}}>Do not have an account? </Text>
        <Pressable
        onPress={()=>navigation.navigate('SIGN UP')}
      >
        <Text style={{color:"#609FFF", marginBottom:"9%", textDecorationLine:"underline",textDecorationStyle: "solid",textDecorationColor: "#609FFF"}}>Sign up</Text>
        </Pressable>
      </View>
      </ScrollView>
    )
  }

  export default first;