import {Text, View} from 'react-native';

import PriceCard from '../PriceCard';
import React from 'react';
import global from '../../styles/global';

const CartScreen = () => {
  return (
    <View style={global.container}>
      <PriceCard />
    </View>
  );
};

export default CartScreen;
