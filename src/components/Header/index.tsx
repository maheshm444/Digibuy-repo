import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = ({title, showLogo}) => {
  return (
    <View style={styles.root}>
      <Icon
        name="user"
        size={20}
        onPress={() => alert('User data')}
        color="#72cdc8"
        style={styles.userButton}
      />
      <Icon
        name="search"
        size={20}
        onPress={() => alert('Search Data')}
        color="#72cdc8"
        style={styles.userButton}
      />
    </View>
  );
};

export default Header;

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
