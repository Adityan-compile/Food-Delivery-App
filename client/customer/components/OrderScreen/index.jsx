import {Alert, RefreshControl, ScrollView, Text, View} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';

import Header from '../Header';
import OrderCard from '../OrderCard';
import OrderContext from '../../store/contexts/orderContext';
import global from '../../styles/global';
import {useFocusEffect} from '@react-navigation/native';

const OrderScreen = () => {
  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [retries, setRetries] = useState(0);

  const {fetchOrders} = useContext(OrderContext);

  const fetchData = useCallback(() => {
    setRefreshing(true);
    fetchOrders()
      .then(res => {
        setOrders(res);
        setRefreshing(false);
      })
      .catch(e => {
        if (retries === 0) {
          setRetries(retries++);
          fetchData();
        } else {
          setRefreshing(false);
          Alert.alert('Error', 'Cannot Load Your Orders');
        }
      });
  }, []);

  useEffect(fetchData, []);
  useFocusEffect(fetchData);

  return (
    <View style={global.container}>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => fetchData()}
          />
        }
        style={global.container}>
        {orders.map((order, index) => (
          <OrderCard index={index} data={order} key={order._id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default OrderScreen;
