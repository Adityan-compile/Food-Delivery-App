import {Image, Text, TouchableOpacity, View} from 'react-native';

import {Icon} from 'react-native-elements';
import React from 'react';
import global from '../../styles/global';
import styles from './styles';

const CartItemCard = ({data, handleDelete}) => {
  return (
    <View style={global.container}>
      <View style={styles.card}>
        <Image
          source={{uri: data.item.image}}
          style={styles.image}
          resizeMode="cover"
          resizeMethod="resize"></Image>
        <View style={[global.container, styles.info]}>
          <Text style={styles.text}>{data.item.name}</Text>
          <Text style={styles.price}>
            {'\u20B9'}
            {data.item.price * data.quantity}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleDelete(data.item._id);
          }}>
          <Icon
            type="ionicon"
            name="trash"
            color="red"
            size={30}
            containerStyle={styles.delete}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItemCard;
