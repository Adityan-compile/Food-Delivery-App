import Home from '../screens/Home';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {setTabIcons} from './utils';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => setTabIcons(size, color, route),
      })}>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
