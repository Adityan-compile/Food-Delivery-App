import {Alert, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import AuthContext from '../store/contexts/authContext';
import AuthProvider from '../store/providers/AuthProvider';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import Signup from '../screens/Signup';
import Tabs from './Tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Routes = () => {
  const Stack = createStackNavigator();
  const [user, setUser] = useState('');

  useEffect(() => {
    AuthProvider.getAuthState()
      .then(res => setUser(res))
      .catch(e => Alert.alert('App Error !!'));
  }, []);

  const renderGroup = () => {
    if (user.authenticated === true) {
      return <Stack.Screen name="Tabs" component={Tabs}></Stack.Screen>;
    } else {
      return (
        <Stack.Group>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
        </Stack.Group>
      );
    }
  };

  return (
    <View style={{flex: 1}}>
      <AuthContext.Provider value={AuthProvider}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {renderGroup()}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
};

export default Routes;
