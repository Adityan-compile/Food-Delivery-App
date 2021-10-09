import CartItemCard from '../CartItemCard';
import React from 'react';
import {View} from 'react-native';
import global from '../../styles/global';

const CartItems = ({items}) => {
  return (
    <View style={global.container}>
      {items.map(item => {
        return <CartItemCard key={item._id} data={item} />;
      })}
    </View>
  );
};

export default CartItems;
