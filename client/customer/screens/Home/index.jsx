import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import Header from '../../components/Header';
import RestaurantContext from '../../store/contexts/restaurantContext';
import Trending from '../../components/Trending';

const Home = () => {
  const {getAllRestaurants, searchRestaurants} = useContext(RestaurantContext);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    AndroidKeyboardAdjust.setAdjustNothing();

    getAllRestaurants()
      .then(res => setRestaurants(res))
      .catch(err => setError('Error Loading Data'));
    return () => {
      AndroidKeyboardAdjust.setAdjustResize();
    };
  }, []);

  const search = query => {
    if (!query) return;
    searchRestaurants(query)
      .then(res => {
        if (res.length === 0) return;
        setRestaurants(res);
      })
      .catch(err => setError('Error Loading Data'));
  };

  return (
    <View style={{flex: 1}}>
      <Header handleSubmit={search} />
      <Trending error={error} restaurants={restaurants} />
    </View>
  );
};

export default Home;
