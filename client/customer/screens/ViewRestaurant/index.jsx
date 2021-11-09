import {Alert, Text, View} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';

import Context from '../../store/contexts';
import RestaurantScreen from '../../components/RestaurantScreen';
import find from 'lodash/find';
import global from '../../styles/global';
import {useFocusEffect} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const ViewRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    items: [],
  });

  const [favourite, setFavourite] = useState(false);

  const [error, setError] = useState('');

  const {
    getRestaurantById,
    addToFavourites,
    loadFavourites,
    removeFromFavourites,
  } = useContext(Context);

  const route = useRoute();
  const id = route.params.id;

  const fetchData = useCallback(() => {
    getRestaurantById(id)
      .then(res => setRestaurant(res))
      .catch(e => {
        console.error(e);
        setError('Error Loading Restaurant');
      });
    loadFavourites().then(res => {
      if (find(res, ['_id', restaurant._id])) {
        return setFavourite(true);
      }
      return setFavourite(false);
    });
  }, [id]);

  useEffect(fetchData, [id]);
  useFocusEffect(fetchData);

  const handler = () => {
    if (!favourite) {
      addToFavourites(restaurant)
        .then(() => {
          setFavourite(!favourite);
        })
        .catch(e => {
          console.log(e);
          Alert.alert('Error', 'Cannot Add to Favourites');
        });
    } else {
      removeFromFavourites(restaurant._id)
        .then(() => {
          setFavourite(!favourite);
        })
        .catch(e => Alert.alert('Error', 'Cannot Remove Item'));
    }
  };

  return (
    <View style={global.container}>
      {error ? (
        <Text style={global.error}>{error}</Text>
      ) : (
        <RestaurantScreen
          data={restaurant}
          handler={handler}
          favourite={favourite}
        />
      )}
    </View>
  );
};

export default ViewRestaurant;
