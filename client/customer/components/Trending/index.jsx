import {Text, View} from 'react-native';

import React from 'react';
import RestaurantCard from '../RestaurantCard';
import global from '../../styles/global';
import styles from './styles';

const Trending = ({restaurants, error}) => {
  return (
    <View style={{flex: 1}}>
      {error ? (
        <Text style={[global.error, global.textCenter, {margin: 10}]}>
          {error}
        </Text>
      ) : (
        <View style={global.container}>
          <Text style={styles.heading}>Trending</Text>
          {restaurants.map(item => (
            <RestaurantCard key={item._id} data={item} />
          ))}
        </View>
      )}
    </View>
  );
};

export default Trending;
