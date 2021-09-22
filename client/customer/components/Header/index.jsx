import {ScrollView, Text, TextInput, View} from 'react-native';

import React from 'react';
import global from '../styles/global';
import styles from './styles';
import {useRoute} from '@react-navigation/native';

const Header = () => {
  const route = useRoute();
  if (route.name === 'Home') {
    return (
      <View style={styles.header}>
        <Text style={styles.headingText}>Explore</Text>
        <TextInput
          placeholderTextColor="#878787"
          placeholder="Find Restaurants Near You"
          style={styles.input}></TextInput>
      </View>
    );
  }
};

export default Header;
