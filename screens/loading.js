import { transform } from '@babel/core';
import React,{useEffect, useState} from 'react'
import { View, Animated, Easing, Dimensions, DevSettings } from 'react-native'
import { Avatar } from 'react-native-paper';

import signin from './signin'

var w_height = Dimensions.get('window').height;
var w_width = Dimensions.get('window').width;
var size = w_width<w_height? w_width-100:w_height-100;
var radius = size+200;

function loading ({navigation}) {

useEffect(()=>{
  startImageRotateFunction()

  setTimeout(() => {
    navigation.navigate("ERROR TECH");
  }, 2000);

});



  let rotateValueHolder = new Animated.Value(0)
  const startImageRotateFunction =() =>{
  
  rotateValueHolder.setValue(0);
  Animated.timing(rotateValueHolder,{
    toValue: 1,
    duration: 3000,
    easing: Easing.linear,
    useNativeDriver: false
  }).start(()=> startImageRotateFunction())
}

  const RotateData = rotateValueHolder.interpolate({
    inputRange:[0,1],
    outputRange:['0deg','360deg']
  })
    return (
      <View style={{backgroundColor:"black" ,flex:1, alignItems:"center", justifyContent:"center"}}>
        <Animated.Image source={require('../public/images/ErrorTech.png') } style={[{height:size, width:size, borderRadius:radius } , {transform: [{rotate: RotateData}]} ]}/>
      </View>
    )
  }

  const ErrorTech = (navigation) =>
  {
    return (signin);
  }

  export default loading;