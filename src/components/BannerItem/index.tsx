import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface BannerItemProps {
  item: {
    id: string;
    title: string;
    image: string;
  };
}

const BannerItem = ({item}: BannerItemProps) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View>
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

export default BannerItem;
