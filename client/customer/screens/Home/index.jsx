import React, {useCallback, useContext, useEffect, useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';

import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import Context from '../../store/contexts';
import Header from '../../components/Header';
import Trending from '../../components/Trending';

const Home = () => {
  const {getAllRestaurants, searchRestaurants} = useContext(Context);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = useCallback(() => {
    setRefreshing(true);
    getAllRestaurants()
      .then(res => {
        setRefreshing(false);
        setRestaurants(res);
      })
      .catch(err => setError('Error Loading Data'));
  }, []);

  useEffect(() => {
    AndroidKeyboardAdjust.setAdjustNothing();
    fetchData();
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
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchData}></RefreshControl>
        }
        contentContainerStyle={{flexGrow: 1}}>
        <Trending error={error} restaurants={restaurants} />
      </ScrollView>
    </View>
  );
};

export default Home;
