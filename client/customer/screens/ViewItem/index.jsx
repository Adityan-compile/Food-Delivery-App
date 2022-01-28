import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import ItemScreen from '../../components/ItemScreen';

const ViewItem = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const data = route.params.data;

  useEffect(() => {
    if (data === undefined || data === null) {
      navigation.navigate('Home');
    }
  }, [data]);

  return <ItemScreen data={data} />;
};

export default ViewItem;
