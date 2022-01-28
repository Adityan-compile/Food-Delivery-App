import {hideTabButtons, setTabIcons} from './utils';
import {useContext, useEffect, useState} from 'react';

import Account from '../screens/Account';
import Cart from '../screens/Cart';
import Favourites from '../screens/Favourites';
import Home from '../screens/Home';
import Orders from '../screens/Orders';
import React from 'react';
import ViewItem from '../screens/ViewItem';
import ViewRestaurant from '../screens/ViewRestaurant';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        headerTitle: '',
        tabBarIcon: ({color, size}) => setTabIcons(size, color, route),
        headerShown: false,
        tabBarButton: hideTabButtons(route),
        tabBarStyle: {
          margin: 10,
          borderRadius: 15,
          elevation: 10,
          backgroundColor: '#f5f5f5',
          position: 'absolute',
          opacity: 0.95,
        },
      })}>
      <Tab.Group>
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen
          name="View Restaurant"
          component={ViewRestaurant}></Tab.Screen>
        <Tab.Screen name="View Item" component={ViewItem}></Tab.Screen>
        <Tab.Screen name="Cart" component={Cart}></Tab.Screen>
        <Tab.Screen name="Favourites" component={Favourites}></Tab.Screen>
        <Tab.Screen name="Account" component={Account}></Tab.Screen>
        <Tab.Screen name="Orders" component={Orders}></Tab.Screen>
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default Tabs;
