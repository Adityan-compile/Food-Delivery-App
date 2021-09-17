import React, { useEffect } from 'react'
import { View } from 'react-native';
import LoginScreen from '../../components/LoginScreen/index.jsx';

export default function Login({ navigation }) {
    useEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    },[navigation]);
    return (
        <View style={{ flex: 1 }}>
            <LoginScreen></LoginScreen>
        </View>
    )
}
