import {
  ImageBackground,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Divider} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import ItemCard from '../ItemCard';
import React from 'react';
import global from '../../styles/global';
import styles from './styles';

const RestaurantScreen = ({data}) => {
  return (
    <View style={global.container}>
      <ScrollView>
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

        {/* <View
          style={[
            global.container,
            {flexDirection: 'row', flexWrap: 'wrap', margin: 10, height: 10},
          ]}>
          <Icon
            name="hourglass-outline"
            color="green"
            type="ionicon"
            style={[styles.hourGlass, styles.badge]}></Icon>
          <Text>20 - 30 min</Text>
        </View> */}

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
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                `http://maps.google.com/maps?daddr=${data.address}`,
              )
            }>
            <Text style={styles.info}>{data.address}</Text>
          </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${data.phone}`)}>
            <Text style={styles.info}>{data.phone}</Text>
          </TouchableOpacity>
          <View
            style={{
              flexBasis: '100%',
            }}></View>
          <Icon
            name="mail-outline"
            type="ionicon"
            size={20}
            color="grey"
            style={styles.infoIcon}></Icon>
          <TouchableOpacity
            onPress={() => Linking.openURL(`mailto:${data.email}`)}>
            <Text style={styles.info}>{data.email}</Text>
          </TouchableOpacity>
          <View
            style={{
              flexBasis: '100%',
            }}></View>
        </View>
        <Text style={styles.infoTitle}>Items</Text>
        {data.items.map(item => (
          <ItemCard key={item._id} data={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
