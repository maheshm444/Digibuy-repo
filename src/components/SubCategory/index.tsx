import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { SCREENS } from '../../constants';

const SubCategories = ({item, navigation}) => {
    console.log(item);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push(SCREENS.DYNAMIC_PAGE, {url:item.navigateTo});
      }}>
      <View style={styles.root}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.productDetails}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SubCategories;
const window = Dimensions.get('window');
const imageWidth = window.width / 6 + 63;
const imageHeight = window.width / 2;
const styles = StyleSheet.create({
  root: {
    width: window.width / 3,
    alignItems: 'center',
    height: imageHeight + 45,
    marginTop: 3,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  productDetails: {
    backgroundColor: '#fff',
    width: imageWidth,
    paddingHorizontal: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#929494',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  off: {
    color: '#009440',
    fontWeight: '700',
  },
  oldPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#929494',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  merged: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mergedPrice: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
