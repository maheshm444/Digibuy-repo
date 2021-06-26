import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailBox = ({data}) => {
//   console.log('props', props.data.description);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 21, fontWeight: 'bold'}}>{data.title}</Text>
      <Text numberOfLines={5}>{data.description}</Text>
    </View>
  );
};

export default DetailBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bbedea',
    margin: 7,
    borderRadius: 5,
    padding: 10,
  },
});
