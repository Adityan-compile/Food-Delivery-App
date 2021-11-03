import {Text, View} from 'react-native';

import Header from '../Header';
import OrderCard from '../OrderCard';
import React from 'react';
import global from '../../styles/global';

const OrderScreen = () => {
  return (
    <View style={global.container}>
      <Header />
      <View style={global.container}>
        <OrderCard index={50}></OrderCard>
      </View>
    </View>
  );
};

export default OrderScreen;
