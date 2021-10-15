import {Alert, RefreshControl, ScrollView, View} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import CartContext from '../../store/contexts/cartContext';
import CartItems from '../CartItems';
import PriceCard from '../PriceCard';
import global from '../../styles/global';

const CartScreen = () => {
  const {navigate} = useNavigation();
  const {getCart, remove} = useContext(CartContext);
  const [cart, setCart] = useState({
    items: [],
  });
  const [total, setTotal] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = useCallback(() => {
    setRefreshing(true);
    getCart()
      .then(res => {
        setCart(res);
        let tot = 0;
        res.items.forEach(elem => {
          tot += elem.item.price * elem.quantity;
        });
        setTotal(tot);
        setRefreshing(false);
      })
      .catch(e => {
        setRefreshing(false);
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

  const handleDelete = item => {
    setRefreshing(true);
    remove(item)
      .then(res => {
        setCart(res);
        let tot = 0;
        res.items.forEach(elem => {
          tot += elem.item.price * elem.quantity;
        });
        setTotal(tot);
        setRefreshing(false);
      })
      .catch(e => {
        setRefreshing(false);
        Alert.alert('Error', 'Error Deleting item');
      });
  };

  return (
    <View style={global.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchData}></RefreshControl>
        }>
        <CartItems items={cart.items} handleDelete={handleDelete} />
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
