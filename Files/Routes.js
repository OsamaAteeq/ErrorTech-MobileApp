import React, { useContext, useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth'
import { NavigationContainer } from '@react-navigation/native';


import AuthStack from './AuthStack';
import {AuthContext} from './AuthProvider';

import AdminStack from './AdminStack';
import UserStack from './UserStack';
import loading from '../screens/loading';
import { Alert } from 'react-native';

const Routes = () =>{
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);
    const onAuthStateChanged=(user)=>
    {
        if(user != null){
        if(user.emailVerified){
            setUser(user);
        }
        else
        {
            user.sendEmailVerification();
            Alert.alert("Please verify your e-mail, a verification link has been sent.");
        }
    }
        if(initializing) 
        {setInitializing(false);}

    }

    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged); 
        return subscriber;
    },[])

    if(initializing) {
    return null;        //try to replace with loading for future
    }

    return(
        <NavigationContainer>
            {user?(user.uid == 'LSAIf01K9rNrJZWSpTa8ZGgHzGv2'?<AdminStack/>:<UserStack/>):<AuthStack/>}
        </NavigationContainer>
    );
};

export default Routes;