import {Button, Icon} from 'react-native-elements';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import NumericInput from 'react-native-numeric-input';
import global from '../../styles/global';
import styles from './styles';

const ItemScreen = ({data}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={global.container}>
      <Image
        style={styles.cover}
        source={{
          uri: data.image,
        }}></Image>
      <Text style={styles.heading}>{data.name}</Text>

      <View
        style={[global.container, {flexDirection: 'row', flexWrap: 'wrap'}]}>
        <Text style={styles.originalPrice}>
          {'\u20B9'}
          {data.originalPrice}
        </Text>
        <Text style={styles.price}>
          {'\u20B9'}
          {data.price}
        </Text>
        <Text style={styles.info}>{data.description}</Text>
        <NumericInput
          value={quantity}
          onChange={value => {
            if (value === 0) {
              setQuantity(1);
            } else {
              setQuantity(value);
            }
          }}
          minValue={1}
          maxValue={data.portionsAvailable}
          containerStyle={styles.quantity}
          rounded="true"></NumericInput>
        <Text style={styles.price}>
          {'\u20B9'}
          {data.price * quantity}
        </Text>
      </View>
      <TouchableOpacity>
        <Button
          title="Add to Cart"
          icon={
            <Icon
              name="cart"
              type="ionicon"
              color="white"
              style={{marginRight: 5}}></Icon>
          }
          buttonStyle={styles.button}></Button>
      </TouchableOpacity>
    </View>
  );
};

export default ItemScreen;
