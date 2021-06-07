import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginTop: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  box: {
    width: 150,
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 18,
  },
  image: {
    width: 150,
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
