import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

import global from '../../styles/global';
import styles from './styles';
import {useRoute} from '@react-navigation/native';

const Header = ({handleSubmit}) => {
  const route = useRoute();

  const [query, setQuery] = useState('');

  if (route.name === 'Home') {
    return (
      <View style={styles.homeHeader}>
        <Text style={styles.headingText}>Explore</Text>
        <TextInput
          placeholderTextColor="#878787"
          placeholder="Find Restaurants Near You"
          style={styles.input}
          onChangeText={value => setQuery(value)}
          onSubmitEditing={() => handleSubmit(query)}></TextInput>
      </View>
    );
  } else if (route.name === 'Cart') {
    return (
      <View style={styles.cartHeader}>
        <Text style={styles.headingText}>Cart</Text>
        <View style={styles.priceCard}>
          <Text style={styles.cardText}>SubTotal:</Text>
          <Text style={styles.value}>{'\u20B9'}800</Text>
          <Text style={styles.cardText}>Tax & Fees:</Text>
          <Text style={styles.value}>{'\u20B9'}100</Text>
          <Text style={styles.cardText}>Delivery:</Text>
          <Text style={styles.value}>{'\u20B9'}70</Text>
          <Text style={styles.total}>Total:</Text>
          <Text style={[styles.total, styles.value]}>{'\u20B9'}970</Text>
        </View>
      </View>
    );
  }
};

export default Header;
