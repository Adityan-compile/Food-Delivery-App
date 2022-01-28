import CartScreen from '../../components/CartScreen';
import Header from '../../components/Header';
import React from 'react';
import {View} from 'react-native';
import global from '../../styles/global';

const Cart = () => {
  return (
    <View style={global.container}>
      <Header />
      <CartScreen />
    </View>
  );
};

export default Cart;
