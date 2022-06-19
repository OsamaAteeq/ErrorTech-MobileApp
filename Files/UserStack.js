import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import loading from '../screens/loading'
import user from '../screens/user'

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
        }}>
      <Stack.Screen name="loading" component={loading} options={{headerShown:false}} />
      <Stack.Screen name="ERROR TECH" component={user}  options={{headerBackVisible:false}}/>
    </Stack.Navigator>
  )
}


export default AuthStack