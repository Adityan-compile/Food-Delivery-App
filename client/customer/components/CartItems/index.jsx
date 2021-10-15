import CartItemCard from '../CartItemCard';
import React from 'react';
import {View} from 'react-native';
import global from '../../styles/global';

const CartItems = ({items, handleDelete}) => {
  return (
    <View style={global.container}>
      {items.map(item => {
        return (
          <CartItemCard
            key={item._id}
            data={item}
            handleDelete={handleDelete}
          />
        );
      })}
    </View>
  );
};

export default CartItems;
