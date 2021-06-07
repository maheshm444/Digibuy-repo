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
      <FlatList
        data={item.categories}
        renderItem={({item}) => (
          <View>
            <View style={styles.box}>
              <View>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.category.image,
                  }}
                />
                <Text style={styles.title}>{item.category.title}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default CategoryList;
