import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import RestaurantCard from '../RestaurantCard';
import RestaurantContext from '../../store/contexts/restaurantContext';
import global from '../../styles/global';
import styles from './styles';

const Trending = () => {
  const {getAllRestaurants} = useContext(RestaurantContext);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    getAllRestaurants()
      .then(res => setRestaurants(res))
      .catch(err => setError('Error Loading Data'));
  }, []);

  return (
    <View style={{flex: 1}}>
      {error ? (
        <Text style={[global.error, global.textCenter, {margin: 10}]}>
          {error}
        </Text>
      ) : (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Text style={styles.heading}>Trending</Text>
          {restaurants.map(item => (
            <RestaurantCard key={item._id} data={item} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Trending;
