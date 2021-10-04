import {FlatList, ScrollView, Text, View} from 'react-native';

import CartItemCard from '../CartItemCard';
import React from 'react';
import global from '../../styles/global';

const CartItems = () => {
  const items = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'First Item',
    },
    {
      id: '5',
      title: 'Second Item',
    },
    {
      id: '6',
      title: 'Third Item',
    },
  ];

  return (
    <View style={global.container}>
      {items.map(item => {
        return <CartItemCard key={item.id} item={item} />;
      })}
    </View>
  );
};

export default CartItems;
