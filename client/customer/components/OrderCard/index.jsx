import {Text, View} from 'react-native';

import {Button} from 'react-native-elements';
import ItemCard from '../ItemCard';
import React from 'react';
import styles from './styles';

const OrderCard = ({index, data}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Marriot</Text>
      <Text style={styles.orderNo}>
        Order {'#'}
        {index + 1}
      </Text>
      <Text style={styles.total}>{'\u20B9'}500</Text>
      {/* <Button
        title="View Order"
        containerStyle={styles.btn}
        buttonStyle={{
          borderRadius: 10,
        }}></Button> */}
      {/* <View> 
        <ItemCard></ItemCard>
      </View>*/}
      <Button
        title="Buy Again"
        containerStyle={styles.btn}
        buttonStyle={{
          backgroundColor: 'tomato',
          borderRadius: 10,
        }}></Button>
    </View>
  );
};

export default OrderCard;
