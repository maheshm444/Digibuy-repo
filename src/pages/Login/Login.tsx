import React, {useState} from 'react';
import {View, Image, AsyncStorage, Text, Button} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import style from './LoginStyle';
import images from '../../design-system/images';
import theme from '../../design-system/theme';
import { SCREENS, getUrlFromScreen } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn,selectUserData, } from '../../redux/userSlice';
import {setSignedIn,setUserData} from '../../redux/userSlice'

//declare the type of props
const Login = (props) => {
  const { navigation } = props;
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);
  const Dispatch = useDispatch()
  navigation.setOptions({ headerShown: false });
console.log(userData);
  const [user, setUser] = useState({})
  //google signin
  
  const signIn = async () => {
    
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    setUser(userInfo)
    if (userInfo) {
      
      //console.log("user info", userInfo);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      props.navigation.push(SCREENS.DYNAMIC_PAGE, {url: getUrlFromScreen(SCREENS.HOME)})
      // dispatch an action to set user info
      // props.dispatch({type: "SET_USER_INFO", payload: userInfo})
      Dispatch(setSignedIn(true))
      Dispatch(setUserData(userInfo.user))
    }
  }

  const signOut = async () =>{
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <View style={style.container}>
      <Image
        source={{uri: images.logo}}
        width={theme.dimensions.d240}
        height={theme.dimensions.d115}
        style={style.logoStyle}
      />
      <View style={style.signInButton}>
        <GoogleSigninButton
          style={{width: '100%'}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={signIn}
        />
      </View>
    </View>
  );
};

export default Login;

// export default function Login() {
// 	return <Text>Login</Text>
// }