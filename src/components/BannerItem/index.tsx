import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SCREENS } from '../../constants';
import styles from './styles';

interface BannerItemProps {
  item: {
    id: string;
    title: string;
    image: string;
  };
}

const BannerItem = ({data,navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(SCREENS.DYNAMIC_PAGE, {url: data.navigateTo})}>
      <Text style={styles.title}>{data.title}</Text>
      <View style={[styles.box, {width: windowWidth - 30}]}>
        <View>
          <Image
            style={[styles.image, {width: windowWidth - 30}]}
            source={{
              uri: data.image,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BannerItem;
