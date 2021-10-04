import {ScrollView, Text, View} from 'react-native';

import CartItems from '../CartItems';
import PriceCard from '../PriceCard';
import React from 'react';
import global from '../../styles/global';

const CartScreen = () => {
  return (
    <View style={global.container}>
      <ScrollView>
        <CartItems />
        <PriceCard />
      </ScrollView>
    </View>
  );
};

export default CartScreen;
