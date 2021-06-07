import React from 'react';
import {StyleSheet, Dimensions, View, FlatList} from 'react-native';
import CategoryItem from '../../components/CategoryItem';
import BannerItem from '../../components/BannerItem';
import OfferItem from '../../components/OfferItem';
import categories from '../../data/categories';
import banner from '../../data/banner';
import offer from '../../data/offer';
import SearchBox from '../../components/SearchBox';
import CategoryList from '../../components/CategoryList';
import categoryListData from '../../data/categoryListData';

function HomeScreen() {
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={[styles.root, {height: windowHeight}]}>
      <SearchBox />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}) => <CategoryItem item={item} />}
      />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={offer}
        renderItem={({item}) => <OfferItem item={item} />}
      />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={banner}
        renderItem={({item}) => <BannerItem item={item} />}
      />
      {/* {categoryListData.map(categoryList => (
        <CategoryList item={categoryList} />
      ))} */}
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    marginTop: 5,
    borderRadius: 10,
    overflow: 'hidden',
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});
export default HomeScreen;
