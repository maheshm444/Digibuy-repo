import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import SubCategory from '../SubCategory';


const SubCategories = ({category,navigation}) => {
  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        {category.map(subCategory => (
          <SubCategory item={subCategory} key={subCategory.id} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SubCategories;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
});
