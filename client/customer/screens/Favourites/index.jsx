import {Text, View} from 'react-native';

import FavouritesScreen from '../../components/FavouritesScreen';
import Header from '../../components/Header';
import React from 'react';
import global from '../../styles/global';

const Favourites = () => {
  return (
    <View style={global.container}>
      <Header />
      <FavouritesScreen />
    </View>
  );
};

export default Favourites;
