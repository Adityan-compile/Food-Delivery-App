import {Text, View} from 'react-native';

import {Button} from 'react-native-elements';
import OrderItemCard from '../OrderItemCard';
import React from 'react';
import styles from './styles';

const OrderCard = ({index, data}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{data.restaurant.name}</Text>
      <Text style={styles.infoText}>
        Order {'#'}
        {index + 1}
      </Text>
      <Text style={styles.infoText}>{data.status}</Text>
      <Text style={styles.total}>{'\u20B9'}500</Text>
      <Button
        title="Buy Again"
        containerStyle={styles.btn}
        buttonStyle={{
          backgroundColor: 'tomato',
          borderRadius: 10,
        }}></Button>
      <View style={styles.container}>
        {data.items.map(item => (
          <OrderItemCard data={item} key={item._id}></OrderItemCard>
        ))}
      </View>
    </View>
  );
};

export default OrderCard;
