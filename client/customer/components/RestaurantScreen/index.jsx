import {ImageBackground, Text, View} from 'react-native';

import {Divider} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import React from 'react';
import global from '../../styles/global';
import styles from './styles';

const RestaurantScreen = ({data}) => {
  return (
    <View style={global.container}>
      <ImageBackground style={styles.cover} source={{uri: data.image}}>
        <Icon
          name="heart-outline"
          type="ionicon"
          color="white"
          size={30}
          style={styles.heartIcon}></Icon>
      </ImageBackground>
      <Text style={styles.heading}>{data.name}</Text>
      <Text style={styles.cuisines}>{data.cuisines}</Text>

      <Icon
        name="hourglass-outline"
        color="green"
        type="ionicon"
        style={styles.hourGlass}></Icon>

      <Divider orientation="horizontal" style={{margin: 10}}></Divider>

      <Text style={styles.infoTitle}>Store Info</Text>
      <View
        style={[global.container, {flexDirection: 'row', flexWrap: 'wrap'}]}>
        <Icon
          name="location-outline"
          type="ionicon"
          size={20}
          color="grey"
          style={styles.infoIcon}></Icon>
        <Text style={styles.info}>{data.address}</Text>
        <View
          style={{
            flexBasis: '100%',
          }}></View>
        <Icon
          name="call-outline"
          type="ionicon"
          size={20}
          color="grey"
          style={styles.infoIcon}></Icon>
        <Text style={styles.info}>{data.phone}</Text>
      </View>
    </View>
  );
};

export default RestaurantScreen;
