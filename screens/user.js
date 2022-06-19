import React, {  useContext } from 'react';
import { View, Text, DevSettings, Dimensions, ScrollView } from 'react-native'
import { Button } from 'react-native-paper';
import { AuthContext } from '../Files/AuthProvider';

function user ({navigation}) {

    const{logout} = useContext(AuthContext);
    var w_height = Dimensions.get('window').height;
var w_width = Dimensions.get('window').width;
    var size = w_width<w_height? w_width:w_height;
    var b_width = size/2;
    const lgout=()=>{
        logout()
        DevSettings.reload();
    }
    return (
        <ScrollView style={{flex:1, backgroundColor:"#2D2D2D"}}>
        <View style={{backgroundColor:"black", alignItems:"center", padding:"2.5%"}}>
        <Text style={{color:"#FDFE02", fontSize:32, fontWeight:"bold"}}>USER</Text>
      </View>
      <View style={{alignItems:"center", marginTop:"10%"}}>
      <Button
          mode="contained"
          style={{
            width:b_width,
            padding:"2%",
            backgroundColor: '#FDFE02',
            borderRadius: 200,
            marginBottom:"10%"
          }}
          onPress={() => lgout()}>
          <Text style={{color:"black", fontWeight:"bold"}}>LOG OUT</Text>
        </Button>
      </View>
      </ScrollView>
    )
  }

  export default user;