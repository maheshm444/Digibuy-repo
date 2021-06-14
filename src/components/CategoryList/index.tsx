import React from 'react';
import {View, FlatList, Text} from 'react-native';
import CategoryItem from '../CategoryItem';
import styles from './styles';

interface CategoryItemProps {
  id: string;
  title: string;
  categories: [
    {
      id: string;
      title: string;
      image: string;
    },
  ];
}

const CategoryList = ({item}: CategoryItemProps) => {
  return (
    <View>
      <Text>Category List component</Text>
    </View>
  );
};

export default CategoryList;
