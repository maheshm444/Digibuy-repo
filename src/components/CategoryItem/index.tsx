import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface CategoryItemProps {
  id: string;
  title: string;
  image: string;
}

const CategoryItem = ({item}: CategoryItemProps) => {
  return (
    <View>
      <View style={styles.box}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </View>
  );
};

export default CategoryItem;
