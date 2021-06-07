import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 3,
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: '#000',
    fontStyle: 'italic',
    fontSize: 16,
  },
  search: {
    flex: 0.2,
    alignSelf: 'center',
    marginLeft: 15,
  },
  user: {
    flex: 0.2,
    alignSelf: 'center',
    marginLeft: 15,
  },
});

export default styles;
