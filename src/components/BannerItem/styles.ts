import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      marginTop: 5,
      borderRadius: 10,
      overflow: 'hidden',
    },
    box: {
      height: 180,
      backgroundColor: '#fff',
      borderRadius: 15,
      marginLeft: 20,
      marginBottom: 10,
      marginTop: 5,
      overflow: 'hidden',
    },
    image: {
      height: 180,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      resizeMode:'stretch'
    },
    title: {
      marginTop: 10,
      fontSize: 20,
      fontFamily: '',
      color: '#000',
      alignSelf: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    },
  });

  export default styles;