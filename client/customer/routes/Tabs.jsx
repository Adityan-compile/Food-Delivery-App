import Account from '../screens/Account';
import Cart from '../screens/Cart';
import Favourites from '../screens/Favourites';
import Home from '../screens/Home';
import React from 'react';
import ViewItem from '../screens/ViewItem';
import ViewRestaurant from '../screens/ViewRestaurant';
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
        // header: Header,
      })}>
      <Tab.Group>
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen
          name="View Restaurant"
          component={ViewRestaurant}></Tab.Screen>
        <Tab.Screen name="View Item" component={ViewItem}></Tab.Screen>
        <Tab.Screen name="Cart" component={Cart}></Tab.Screen>
        {/* <Tab.Screen name="Favourites" component={Favourites}></Tab.Screen> */}
        <Tab.Screen name="Account" component={Account}></Tab.Screen>
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default Tabs;
