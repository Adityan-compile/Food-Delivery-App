import React from 'react'
import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';

const Routes = () => {
    const Stack = createStackNavigator();
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default Routes;
