import React, {Children, createContext, useState} from 'react';
import { Alert, DevSettings } from 'react-native';
import auth from '@react-native-firebase/auth'
import { Appbar } from 'react-native-paper';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const[user,setUser] = useState(null);
    return(
    <AuthContext.Provider
        
        value={{
            user,
            setUser,
            login: async(email,password)=>{
                auth().signInWithEmailAndPassword(email, password)
                .then(function (result){
                    console.log(""+JSON.stringify(result.user));
                })
                .catch(function(error) {
                    console.log(error);
                        if(error.code == "auth/invalid-email" || error.code == "auth/user-not-found" || error.code == "auth/wrong-password")
                            Alert.alert("Incorrect email or/and password");
                        else if(error.code == "auth/network-request-failed")
                        {
                            Alert.alert("No internet connection");
                            //close app
                        }
                        else
                            Alert.alert("Unexpected error occured");
                    });
            },
            register: async (email, password, name)=>
            {
                auth().createUserWithEmailAndPassword(email, password)
                .then(function(result) {
                    return result.user.updateProfile({
                    displayName: name
                    })
                    }).catch(function(error) {
                        console.log(error);
                        if(error.code == "auth/invalid-email" || error.code == "" )
                            Alert.alert("Invalid email");
                        else if(error.code == "auth/network-request-failed")
                            {
                                Alert.alert("No internet connection");
                                //close app
                            }
                        else if(error.code == "auth/email-already-in-use")
                            Alert.alert("Account already exists");

                        else
                            Alert.alert("Unexpected error occured");
                        });
            }
            ,
            logout: async ()=>{
                try{
                    auth().signOut();
                }
                catch(e){
                    Alert.alert("Unexpected error occured");
                    console.log(e);
                }
            } ,
            forgotPassword: async (email)=>{
                try{
                    auth().sendPasswordResetEmail(email);
                }
                catch(e){
                    if(error.code == "auth/network-request-failed")
                        {
                            Alert.alert("No internet connection");
                            //close app
                        }
                        else{
                    Alert.alert("Unexpected error occured");
                        }
                    }
            }

        }}
    >
        {children}
    </AuthContext.Provider>);
}