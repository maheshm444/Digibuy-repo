import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { SCREENS } from '../../constants';
import Login from '../../pages/Login/Login';
import { selectSignedIn, selectUserData, setSignedIn, setUserData } from '../../redux/userSlice';
const Header = (props) => {
  console.log(props);
  const userSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData)
  const dispatch = useDispatch()
  const navigation = useNavigation();
  //const [userProfile, setuserProfile] = useState(userData)
  const handleLogout = () =>{
    if(userSignedIn){
      logout()
    }
  }

  const handleUser = ()=>{
    if (!userSignedIn) {
      login()
    }else{
      navigation.navigate(SCREENS.USER_PROFILE)
    }
  }
  const logout = async () =>{
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      dispatch(setSignedIn(false))
      dispatch(setUserData(null))
      //setUser({}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  }


  const login = () =>{
    navigation.navigate(SCREENS.LOGIN)
  }
const Header = ({title, showLogo}) => {
  return (
    <View style={styles.root}>
      {
        userSignedIn && <Icon
        name="logout"
        size={20}
        onPress={() => handleLogout()}
        color="#022e2b"
        style={styles.userButton}
      />
      }
      
    <Icon
        name="user"
        size={20}
        onPress={() => handleUser()}
        color="#022e2b"
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
  tinyLogo:{
    height: 30,
    width: 30,
    borderRadius:15,


  },
  userButton: {
    marginRight: window.width - 385,
  },
  logo: {
    marginRight: window.width - 100,
  },
});
