import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

import {Icon} from 'react-native-elements';
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
      <View style={styles.commonHeader}>
        <Text style={styles.headingText}>Cart</Text>
      </View>
    );
  } else if (route.name === 'Orders') {
    return (
      <View style={[styles.commonHeader, styles.row]}>
        <Icon
          name="arrow-back-circle-outline"
          type="ionicon"
          color="white"
          size={35}
          style={styles.backIcon}></Icon>
        <Text style={styles.headingText}>Order History</Text>
      </View>
    );
  } else {
    return null;
  }
};

export default Header;
