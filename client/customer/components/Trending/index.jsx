import {ScrollView, Text, View} from 'react-native';

import React from 'react';
import RestaurantCard from '../RestaurantCard';
import styles from './styles';

const Trending = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={styles.heading}>Trending</Text>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </ScrollView>
    </View>
  );
};

export default Trending;
