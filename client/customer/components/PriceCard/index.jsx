import {Button, Icon, PricingCard} from 'react-native-elements';

import React from 'react';
import {View} from 'react-native';
import global from '../../styles/global';
import styles from './styles';

const PriceCard = ({data}) => {
  return (
    <View>
      <PricingCard
        containerStyle={styles.priceCard}
        color="black"
        title="Total"
        price={'\u20B9' + data.total || 0}
        info={['Delivery: \u20B920', `GST: \u20B9 ${(5 / 100) * data.total}`]}
        button={
          <Button
            title="Checkout"
            containerStyle={{
              margin: 5,
            }}
          />
        }></PricingCard>
    </View>
  );
};

export default PriceCard;
