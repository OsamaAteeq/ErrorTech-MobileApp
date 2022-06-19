import React from 'react';
import { Alert } from 'react-native';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';

const Providers = () => 
{
    return(       
        <AuthProvider>
        <Routes/>
        </AuthProvider>
    );
};

export default Providers;