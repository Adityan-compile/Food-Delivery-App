import {Alert, ScrollView, View} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import CartContext from '../../store/contexts/cartContext';
import CartItems from '../CartItems';
import PriceCard from '../PriceCard';
import global from '../../styles/global';

const CartScreen = () => {
  const {navigate} = useNavigation();
  const {getCart} = useContext(CartContext);
  const [cart, setCart] = useState({
    items: [],
  });
  const [total, setTotal] = useState();

  const fetchData = useCallback(() => {
    getCart()
      .then(res => {
        setCart(res);
        let tot = 0;
        res.items.forEach(elem => {
          tot += elem.item.price * elem.quantity;
        });
        setTotal(tot);
      })
      .catch(e => {
        console.error(e);
        Alert.alert(
          'Error',
          'Error Loading Your Cart Please Try Again Later !!',
        );
        setTimeout(() => {
          navigate('Home');
        }, 1000);
      });
  }, []);

  useEffect(fetchData, []);

  useFocusEffect(fetchData);

  return (
    <View style={global.container}>
      <ScrollView>
        <CartItems items={cart.items} />
        <PriceCard
          data={{
            total: total,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default CartScreen;
