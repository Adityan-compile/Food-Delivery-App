import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import global from '../../styles/global';
import {useNavigation} from '@react-navigation/native';

const OrderItemCard = ({data}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate('View Item', {
          data: data.item,
        })
      }>
      <View
        style={[
          global.container,
          {
            elevation: 5,
            padding: 5,
            paddingHorizontal: 10,
            margin: 5,
            marginTop: 10,
            borderRadius: 5,
          },
        ]}>
        <Text
          style={{
            fontStyle: 'italic',
            fontSize: 15,
            fontWeight: 'bold',
            color: 'grey',
          }}>
          {data.item.name}
        </Text>
        <Text
          style={{
            fontStyle: 'italic',
            fontSize: 15,
            fontWeight: 'bold',
            color: 'grey',
          }}>
          X{data.quantity}
        </Text>
        <Text
          style={{
            color: '#ff421c',
            fontSize: 15,
          }}>
          {'\u20B9'}
          {data.item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItemCard;
