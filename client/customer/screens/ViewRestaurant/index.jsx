import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import RestaurantContext from '../../store/contexts/restaurantContext';
import RestaurantScreen from '../../components/RestaurantScreen';
import global from '../../styles/global';
import {useRoute} from '@react-navigation/native';

const ViewRestaurant = () => {
  const [restaurant, setRestaurant] = useState({});
  const [error, setError] = useState('');

  const route = useRoute();
  const {getRestaurantById} = useContext(RestaurantContext);

  useEffect(() => {
    getRestaurantById(route.params.id)
      .then(res => setRestaurant(res))
      .catch(e => {
        console.error(e);
        setError('Error Loading Restaurant');
      });
  }, []);

  return (
    <View style={global.container}>
      {error ? (
        <Text style={global.error}>{error}</Text>
      ) : (
        <RestaurantScreen data={restaurant} />
      )}
    </View>
  );
};

export default ViewRestaurant;
