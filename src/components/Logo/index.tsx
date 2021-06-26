import React from 'react';
import {StyleSheet, Dimensions, View, Image, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import icon from '../../../assets/logo.png';
const Logo = ({title, showLogo}) => {
  return (
    <View style={styles.root}>
      {showLogo && (
        <Image
          source={icon}
          style={{height: 51, width: 110, marginBottom: 10}}
        />
      )}
    </View>
  );
};

export default Logo;

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  userButton: {
    marginRight: window.width - 385,
  },
  logo: {
    marginRight: window.width - 100,
  },
});
