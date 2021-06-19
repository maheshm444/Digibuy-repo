import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { SCREENS } from '../../constants';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


// interface CategoryItemProps {
//   categoryType: string;
//   item: {
//     id: string;
//     title: string;
//     image: string;
//     path: string;
//   };
//   customStylesItem?: object;
// }

const CategoryItem = ({item, navigation}) => {
console.log(navigation);
   const customStylesItem = item.item.customStylesItem
  return (
    <View style={[styles.box, {...customStylesItem}]}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.push(SCREENS.DYNAMIC_PAGE, {url: item.item.navigateTo});
          }}>
          <Image
            style={[styles.image, {...item.item.customStylesItem}]}
            source={{
              uri: item.item.image,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{item.item.title}</Text>
      </View>
    </View>
  );
};

export default CategoryItem;


// import React from 'react'
// import { View, Text } from 'react-native'

// const CategoryItem = (props) => {

//   console.log(props);
//   return (
//     <View>
//       <Text>Category Items</Text>
//     </View>
//   )
// }

// export default CategoryItem

