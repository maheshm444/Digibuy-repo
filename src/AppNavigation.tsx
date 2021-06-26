import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DynamicPage from './pages/DynamicPage';
import {SCREENS} from './constants';
import Header from './components/Header';
import Login from './pages/Login/Login';

export default function AppNavigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.DYNAMIC_PAGE}>
        <Stack.Screen
          name={SCREENS.DYNAMIC_PAGE}
          component={DynamicPage}
          initialParams={{url: '/'}}
          options={{
            headerRight: () => <Header />,
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#72cdc8',
          }}
        />
        <Stack.Screen name={SCREENS.LOGIN} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
