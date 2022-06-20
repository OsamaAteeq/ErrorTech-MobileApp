import React, {  Component, useEffect, useState } from 'react';
import { View, Text, DevSettings, Dimensions, ScrollView} from 'react-native'
import { Button } from 'react-native-paper';

//import {getSeller} from '../Files/SellerApi'
import { AuthContext } from '../Files/AuthProvider';



function sellers ({navigation}) {
  var w_height = Dimensions.get('window').height;
var w_width = Dimensions.get('window').width;
  var size = w_width<w_height? w_width:w_height;
  var b_width = size/2;

  const [sellerList,setSellerList] = useState([]);

  onSellerAdded = (seller)=>
  {
    console.log("Seller Added");
    console.log(seller)
  }

  onSellersRecieved = (sellerList) =>
  {
    console.log(sellerList);
    setSellerList(sellerList)
  }

  useEffect(() => {
   // getSeller(this.onSellersRecieved);
  }, []);

    return (
        <ScrollView style={{flex:1, backgroundColor:"#2D2D2D"}}>
        <View style={{backgroundColor:"black", alignItems:"center", padding:"2.5%"}}>
        <Text style={{color:"#FDFE02", fontSize:32, fontWeight:"bold"}}>SELLERS</Text>
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
          onPress={() => {navigation.navigate("AddSeller")}}>
          <Text style={{color:"black", fontWeight:"bold"}}>ADD NEW</Text>
        </Button>
      </View>
      </ScrollView>
    )
  }

  export default sellers;