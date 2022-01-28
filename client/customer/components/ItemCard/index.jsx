import {Image, Pressable, Text, View} from 'react-native';

import {Icon} from 'react-native-elements';
import React from 'react';
import global from '../../styles/global';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const ItemCard = ({data}) => {
  const {navigate} = useNavigation();
  const handlePress = () => {
    navigate('View Item', {
      data: data,
    });
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.card}>
        <Image source={{uri: data.image}} style={styles.image} />
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.body}>American</Text>
        <View style={[global.container, {flexDirection: 'row'}]}>
          <Text style={[styles.body, styles.price]}>
            {'\u20B9'}
            {data.price}
          </Text>
          <Text>{'        '}</Text>
          <Icon type="ionicon" name="hourglass" color="grey" size={18}></Icon>
          <Text style={styles.body}> 20 - 30 Min</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemCard;
