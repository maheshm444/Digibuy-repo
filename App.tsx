import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import AppNavigation from './src/AppNavigation';
import store from './src/redux/store';
import {LogBox} from 'react-native';

const App = () => {
  // Ignore log notification by message
  LogBox.ignoreLogs(['Warning: ...']);

  //Ignore all log notifications
  LogBox.ignoreAllLogs();
  const WEB_CLIENT_ID =
    '436417972765-0eoe7htsm9p55kofq93ontrrcp0ck2nl.apps.googleusercontent.com';
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });

  return (
    //Redux integeration
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
