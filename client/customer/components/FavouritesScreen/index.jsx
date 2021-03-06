import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {Button} from 'react-native-elements';
import React from 'react';
import RestaurantCard from '../RestaurantCard';
import global from '../../styles/global';

const FavouritesScreen = ({favourites, clearFavourites}) => {
  const handler = () => {
    Alert.alert(
      'Confirmation',
      'Are you Sure you want to clear your Favourites',
      [
        {
          text: 'Yes',
          onPress: () => {
            clearFavourites();
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };

  return (
    <View style={global.container}>
      <ScrollView>
        <TouchableOpacity>
          <Button
            containerStyle={{
              marginHorizontal: 20,
              marginTop: 10,
              alignSelf: 'flex-end',
            }}
            buttonStyle={{
              backgroundColor: 'red',
              borderRadius: 5,
            }}
            onPress={() => handler()}
            title="Clear Favourites"></Button>
        </TouchableOpacity>
        {favourites.map(elem => (
          <RestaurantCard data={elem} key={elem._id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FavouritesScreen;
