import Account from '../screens/Account';
import Cart from '../screens/Cart';
import Favourites from '../screens/Favourites';
import Home from '../screens/Home';
import {Icon} from 'react-native-elements';
import React from 'react';
import Search from '../screens/Search';
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
        headerTitle: '',
        tabBarIcon: ({color, size}) => setTabIcons(size, color, route),
        headerShown: false,
        // headerStyle: {
        //   height: 100,
        //   borderBottomEndRadius: 20,
        //   borderBottomStartRadius: 20,
        //   backgroundColor: '#ff3679',
        // },
      })}>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Search" component={Search}></Tab.Screen>
      <Tab.Screen name="Cart" component={Cart}></Tab.Screen>
      <Tab.Screen name="Favourites" component={Favourites}></Tab.Screen>
      <Tab.Screen name="Account" component={Account}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
