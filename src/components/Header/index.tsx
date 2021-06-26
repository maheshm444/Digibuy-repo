import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../../pages/Login/Login';
import { selectUserData, setSignedIn, setUserData } from '../../redux/userSlice';
const Header = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const logout = async () =>{
    try {
      console.log(userData);
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      dispatch(setSignedIn(false))
      dispatch(setUserData(null))
      console.log(userData);
      //setUser({}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  }

  const login = () =>{
    navigation.navigate('/')
  }
  return (
    <View style={styles.root}>
      {(userData === null)?
      
      (<Icon
        name="user"
        size={20}
        onPress={() => login()}
        color="#022e2b"
        style={styles.userButton}
      />):(
        <View>
          <Icon
        name="logout"
        size={20}
        onPress={() => logout()}
        color="#022e2b"
        style={styles.userButton}
      />
      <Image
      style={styles.tinyLogo}
      source={{
        uri:userData.photo,
      }}
    />
    </View>
    )
    }

      <Icon
        name="search"
        size={20}
        onPress={() => alert('Search Data')}
        color="#022e2b"
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
  tinyLogo:{
    height: 30,
    width: 30,
    borderRadius:15,


  },
  userButton: {
    marginRight: window.width - 385,
  },
});
