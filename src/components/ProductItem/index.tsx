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

const ProductItem = ({data, navigation}) => {
  
  return (
    <View style={{flex:1}}>
      {data.map((item)=>(
        <TouchableOpacity onPress={()=>navigation.navigate(SCREENS.DYNAMIC_PAGE,{url:item.navigateTo})}>
      <View style={styles.root}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.productDetails}>
          <View style={styles.merged}>
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.off}>{item.off}</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.mergedPrice}>
            <Text style={styles.price}>{'$ ' + item.price + '   '}</Text>
            <Text style={styles.oldPrice}>{'$ ' + item.oldPrice}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
      ))
    }
    </View>
  );
};

export default ProductItem;
const window = Dimensions.get('window');
const imageWidth = window.width / 3 + 63;
const imageHeight = window.width / 2;
const styles = StyleSheet.create({
  root: {
    width: window.width / 2,
    alignItems: 'center',
    height: imageHeight + 59,
    marginTop: 3,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  productDetails: {
    backgroundColor: '#e0fffd',
    width: imageWidth,
    paddingHorizontal: 5,
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
    marginBottom: 5,
  },
});