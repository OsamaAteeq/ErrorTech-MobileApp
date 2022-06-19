import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import loading from '../screens/loading'
import signup from '../screens/signup'
import signin from '../screens/signin'
import { Title } from 'react-native-paper';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#FDFE02',
          },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerBackVisible:false
        }}>
      <Stack.Screen name="loading" component={loading} options={{headerShown:false}} />
      <Stack.Screen name="ERROR TECH" component={signin} options={{title:"ERROR TECH"}} />
      <Stack.Screen name="SIGN UP" component={signup} options={{title:"ERROR TECH"}} />
    </Stack.Navigator>
  )
}


export default AuthStack