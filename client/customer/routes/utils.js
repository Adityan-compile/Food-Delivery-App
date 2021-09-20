import {Icon} from 'react-native-elements';
import React from 'react';

export const setTabIcons = (size, color, route) => {
  if (route.name === 'Home') {
    return <Icon name="home" type="ionicon" color={color} size={size}></Icon>;
  } else {
    return <Icon name="heart" type="ionicon" color={color} size={size}></Icon>;
  }
};
