import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const _ = require('underscore');

const Rating = ({rating}) => {
  const ratingArray = _.range(1, rating + 1);
  return (
    <View style={{flexDirection: 'row', padding: 10}}>
      {ratingArray.map(rating => (
        <Icon
          key={rating}
          name="star"
          size={20}
          color="#02d1c4"
          style={{paddingLeft: 2}}
        />
      ))}
    </View>
  );
};

export default Rating;
