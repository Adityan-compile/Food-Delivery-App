import {Alert, ScrollView, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import CartContext from '../../store/contexts/cartContext';
import CartItems from '../CartItems';
import PriceCard from '../PriceCard';
import global from '../../styles/global';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const {navigate} = useNavigation();
  const {getCart} = useContext(CartContext);
  const [cart, setCart] = useState({});
  useEffect(() => {
    getCart()
      .then(res => setCart(res))
      .catch(e => {
        Alert.alert(
          'Error',
          'Error Loading Your Cart Please Try Again Later !!',
        );
        setTimeout(() => {
          navigate('Home');
        }, 1000);
      });
  }, []);
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
