import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Text, View} from 'react-native';

// import RestaurantContext from '../../store/contexts/restaurantContext';
import Context from '../../store/contexts';
import RestaurantScreen from '../../components/RestaurantScreen';
import global from '../../styles/global';
import {useFocusEffect} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const ViewRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    items: [],
  });
  const [error, setError] = useState('');

  const route = useRoute();
  const id = route.params.id;
  const {getRestaurantById} = useContext(Context);
  const fetchData = useCallback(() => {
    getRestaurantById(id)
      .then(res => setRestaurant(res))
      .catch(e => {
        console.error(e);
        setError('Error Loading Restaurant');
      });
  }, [id]);
  useEffect(fetchData, [id]);
  useFocusEffect(fetchData);

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
