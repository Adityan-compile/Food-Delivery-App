import {Image, Pressable, Text, View} from 'react-native';

import {Icon} from 'react-native-elements';
import React from 'react';
import global from '../../styles/global';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const RestaurantCard = ({data}) => {
  const {navigate} = useNavigation();
  const handlePress = () => {
    navigate('View Restaurant', {
      id: data._id,
    });
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.card}>
        <Image source={{uri: data.image}} style={styles.image} />
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.body}>
          {'\u20B9'}
          {'\u20B9'} . American, Continental, Chinese, Italian
        </Text>
        <View style={[global.container, {flexDirection: 'row'}]}>
          <Text style={[styles.body, styles.rating]}>Rating : 9.0 </Text>
          <Icon type="ionicon" name="star" size={18} color="gold" />
          <Text style={styles.body}> {'    '} 20 - 30 min </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantCard;
