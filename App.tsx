import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './src/AppNavigation';

  
const App = () => {
  const WEB_CLIENT_ID =
  '436417972765-0eoe7htsm9p55kofq93ontrrcp0ck2nl.apps.googleusercontent.com';
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });

  return (
	//Redux integeration
	<AppNavigation />
  );
};

export default App;
