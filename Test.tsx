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
import {View, Text, Button, Image} from 'react-native';
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

const Login = () => {
  return <Text>Login</Text>;
};

const Search = () => {
  return <Text>Search</Text>;
};

const Signup = () => {
  return <Text>Search</Text>;
};

const DynamicPage = props => {
  // const components = fetch(props.url);
  const components = [
    {
      type: 'IMAGE',
      value: {
        url: 'http://imageUrl',
        height: 20,
        width: 30,
      },
      navigateTo: '/categories',
    },
    {
      type: 'BANNER',
      value: {
        url: 'http://imageUrl',
        height: 20,
        width: 30,
      },
      navigateTo: '/categories',
    },
  ];
  console.log('props', props);
  return (
    <View style={{flex: 1, backgroundColor: 'red', height: 200, width: 200}}>
      <Text>Dynamic Page</Text>
    </View>
  );
  // return components.map(component => {
  //   if (component.type === 'IMAGE') {
  //     return <Text>Image component</Text>;
  //     // return <ImageComponent {...component} />;
  //   }
  // });
};

// const ImageComponent = props => {
//   return (
//     <Image
//       onPress={() =>
//         props.navigateTo &&
//         props.navigation.navigate('Screen', {url: props.navigateTo})
//       }
//       source={{uri: props.url}}
//       style={{height: props.height, width: props.width}}
//     />;
//   );
// };

const Test = () => {
  // return (
  //   <View>
  //     <Text>Test Screen</Text>
  //   </View>
  // );
  const Stack = createStackNavigator();
  // // console.log(TestData);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Login'} key={'login'} component={Login} />
        <Stack.Screen name={'Search'} key={'search'} component={Search} />
        <Stack.Screen name={'Signup'} key={'signup'} component={Signup} />
        <Stack.Screen
          name={'DynamicPage'}
          key={'dynamicPage'}
          component={DynamicPage}
          initialParams={{url: '/'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // );
};

export default Test;
