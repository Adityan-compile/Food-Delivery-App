import {Image, View} from 'react-native';

import React from 'react';
import global from '../../styles/global';
import styles from './styles';

const RestaurantScreen = ({data}) => {
  return (
    <View style={global.container}>
      <Image style={styles.cover} source={{uri: data.image}}></Image>
    </View>
  );
};

export default RestaurantScreen;
