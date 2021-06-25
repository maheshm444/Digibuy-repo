import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const SizeSelector = ({data}) => {
  const [select, setSelect] = useState('#fff');
  const selectSize = e => {
    setSelect('#33BFB7');
    console.warn('size selected', e.target);
  };
  return (
    <View style={styles.container}>
      {data.sizeSelector.map(size => (
        <View style={styles.selector}>
          <TouchableOpacity>
            <Text
              onPress={e => selectSize(e)}
              style={[styles.text, {backgroundColor: select}]}>
              {size}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default SizeSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 7,
    borderRadius: 5,
    height: height / 10,
    backgroundColor: '#bbedea',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  selector: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
