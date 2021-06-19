// import React from 'react';
// import {View, FlatList, Text, Image} from 'react-native';
// import CategoryItem from '../CategoryItem';
// import styles from './styles';

// // interface CategoryItemProps {
// //   item: {
// //     item: {
// //       id: string;
// //       title: string;
// //       customStyles?: object;
// //       categories: [
// //         {
// //           id: string;
// //           title: string;
// //           image: string;
// //         },
// //       ];
// //     };
// //   };
// // }



import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import CategoryItem from '../CategoryItem'
import styles from './styles';

const categoryList = ({data, navigation}) => {
  //console.log("categoryList", data);
  return (
    <View  style={[styles.root, {height:150}]}>
      <FlatList
      data={data}
      renderItem = {(item) =>(
      <CategoryItem item={item} navigation={navigation}/>
      )
    }
       showsHorizontalScrollIndicator={false}
       horizontal
      />

    </View>
  )
}

export default categoryList
