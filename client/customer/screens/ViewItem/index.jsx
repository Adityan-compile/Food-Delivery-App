import ItemScreen from '../../components/ItemScreen';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const ViewItem = () => {
  const route = useRoute();
  const data = route.params.data;
  return <ItemScreen data={data} />;
};

export default ViewItem;
