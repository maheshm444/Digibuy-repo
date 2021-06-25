import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CategoryItem from '../CategoryItem';
import styles from './styles';

const categoryList = ({data, navigation}) => {
  return (
    <View style={[styles.root, {height: 150}]}>
      <FlatList
        data={data.categories}
        renderItem={item => (
          <CategoryItem item={item} navigation={navigation} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default categoryList;
