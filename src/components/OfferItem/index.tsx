import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface OfferItemProps {
  item: {
    id: string;
    title: string;
    image: string;
  };
}

const OfferItem = ({item}: OfferItemProps) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={[styles.box, {width: windowWidth - 30}]}>
        <View>
          <Image
            style={[styles.image, {width: windowWidth - 30}]}
            source={{
              uri: item.image,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default OfferItem;
