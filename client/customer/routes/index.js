import React from 'react';

import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../pages/Login.jsx';

const Routes = () => {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Login}></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}

export default Routes;
