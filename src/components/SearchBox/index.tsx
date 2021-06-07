import React from 'react';
import {View, Text, Image, Dimensions, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface SearchItemProps {
  item: {
    id: string;
    title: string;
    image: string;
  };
}

const SearchBox = () => {
  return (
    <View style={styles.root}>
      <FontAwesome style={styles.search} name={'search'} size={18} />
      <TextInput
        style={styles.input}
        placeholder="Search for updated fashion trending today"
        placeholderTextColor="#bdbebf"
      />
      <FontAwesome style={styles.user} name={'user'} size={18} />
    </View>
  );
};

export default SearchBox;
