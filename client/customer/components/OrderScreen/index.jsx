import {Alert, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import Header from '../Header';
import OrderCard from '../OrderCard';
import OrderContext from '../../store/contexts/orderContext';
import global from '../../styles/global';

const OrderScreen = () => {
  const [orders, setOrders] = useState([]);

  const {fetchOrders} = useContext(OrderContext);

  useEffect(() => {
    fetchOrders()
      .then(res => setOrders(res))
      .catch(e => Alert.alert('Error', 'Cannot Load Your Orders'));
  }, []);

  return (
    <View style={global.container}>
      <Header />
      <View style={global.container}>
        {orders.map((order, index) => (
          <OrderCard index={index} data={order} key={order._id} />
        ))}
      </View>
    </View>
  );
};

export default OrderScreen;
