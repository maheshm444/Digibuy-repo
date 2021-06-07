/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';
import TestData from './testData';

interface ScreenParams {
  route?: {
    params: {
      id?: number;
      pageName?: string;
    };
  };
  navigation?: string;
}

function Screen({route, navigation}: ScreenParams) {
  // console.log(route);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go back" onPress={() => navigation.navigate('Screen_3')} />
    </View>
  );
}

const Test = () => {
  const Stack = createStackNavigator();
  // console.log(TestData);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {TestData.map(item => {
          console.log(item);
          return (
            <Stack.Screen
              name={item.name}
              key={item.id}
              component={Screen}
              options={item.data}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Test;
