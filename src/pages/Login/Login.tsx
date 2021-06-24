import React, {useState} from 'react';
import {View, Image, AsyncStorage} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import style from './LoginStyle';
import images from '../../design-system/images';
import theme from '../../design-system/theme';
import { SCREENS, getUrlFromScreen } from '../../constants';

//declare the type of props
const Login = (props) => {
  const { navigation } = props;

  navigation.setOptions({ headerShown: false });
  
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
          onPress={async () => {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            if (userInfo) {
              console.log("user info", userInfo);
              await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
			        props.navigation.push(SCREENS.DYNAMIC_PAGE, {url: getUrlFromScreen(SCREENS.HOME)})
              // dispatch an action to set user info
              // props.dispatch({type: "SET_USER_INFO", payload: userInfo})
            }
          }}
        />
      </View>
    </View>
  );
};

export default Login;

// export default function Login() {
// 	return <Text>Login</Text>
// }