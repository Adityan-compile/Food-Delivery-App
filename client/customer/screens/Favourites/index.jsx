import {Alert, Text, View} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';

import Context from '../../store/contexts';
import FavouritesScreen from '../../components/FavouritesScreen';
import Header from '../../components/Header';
import global from '../../styles/global';
import {useFocusEffect} from '@react-navigation/native';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  const {loadFavourites, clearFavourites} = useContext(Context);

  const fetchFavourites = useCallback(() => {
    loadFavourites()
      .then(res => {
        setFavourites(res);
      })
      .catch(e => Alert.alert('Error', 'Cannot Load Favourites'));
  }, []);

  const handler = () => {
    clearFavourites()
      .then(() => {
        Alert.alert('Favourites Cleares');
      })
      .catch(e => Alert.alert('Error', 'Cannot Clear Favourites'));
  };

  useEffect(fetchFavourites, []);
  useFocusEffect(fetchFavourites);

  return (
    <View style={global.container}>
      <Header />
      <FavouritesScreen favourites={favourites} />
    </View>
  );
};

export default Favourites;
