import AuthContext from '../store/contexts/authContext';
import AuthProvider from '../store/providers/AuthProvider';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Signup from '../screens/Signup';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Routes = () => {
  const Stack = createStackNavigator();
  return (
    <View style={{flex: 1}}>
      <AuthContext.Provider value={AuthProvider}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
};

export default Routes;
