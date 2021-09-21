import {Icon} from 'react-native-elements';
import React from 'react';

export const setTabIcons = (size, color, route) => {
  if (route.name === 'Home') {
    return <Icon name="home" type="ionicon" color={color} size={size}></Icon>;
  } else if (route.name === 'Account') {
    return <Icon name="person" type="ionicon" size={size} color={color}></Icon>;
  } else if (route.name === 'Favourites') {
    return <Icon name="heart" type="ionicon" color={color} size={size}></Icon>;
  } else if (route.name === 'Cart') {
    return <Icon name="cart" type="ionicon" color={color} size={size}></Icon>;
  } else if (route.name === 'Search') {
    return (
      <Icon name="restaurant" type="ionicon" color={color} size={size}></Icon>
    );
  }
};
