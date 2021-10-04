import {Image, Text, View} from 'react-native';

import React from 'react';
import global from '../../styles/global';
import styles from './styles';

const CartItemCard = ({item}) => {
  return (
    <View style={global.container}>
      <View style={styles.card}>
        <Image
          source={{uri: 'https://source.unsplash.com/random'}}
          style={styles.image}
          resizeMode="cover"
          resizeMethod="resize"></Image>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </View>
  );
};

export default CartItemCard;
