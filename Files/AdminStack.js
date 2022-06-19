import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import loading from '../screens/loading'
import Admin from '../screens/admin'
import Products from '../screens/products'
import Orders from '../screens/orders'
import Sellers from '../screens/sellers'

import AddProduct from '../screens/addproduct'
import Order from '../screens/addorder'
import AddSeller from '../screens/addseller'

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
      <Stack.Screen name="ERROR TECH" component={Admin} options={{headerBackVisible:false}} />
      <Stack.Screen name="Orders" component={Orders} options={{title:"ERROR TECH"}} />
      <Stack.Screen name="Products" component={Products} options={{title:"ERROR TECH"}} />
      <Stack.Screen name="Sellers" component={Sellers} options={{title:"ERROR TECH"}} />
      <Stack.Screen name="Order" component={Order} options={{title:"ERROR TECH"}} />
      <Stack.Screen name="AddProduct" component={AddProduct} options={{title:"ERROR TECH"}} />
      <Stack.Screen name="AddSeller" component={AddSeller} options={{title:"ERROR TECH"}} />
    </Stack.Navigator>
  )
}


export default AuthStack