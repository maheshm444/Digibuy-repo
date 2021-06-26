import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {getComponent} from '../components/ComponentResolver';
import NavBar from '../components/NavBar/NavBar';
import {fetchData} from '../util';
import LottieView from 'lottie-react-native';
// interface DynamicPageProps {
// 	url: string,
// 	navigation: any //remove any
// }

export default function DynamicPage(props) {
  const [loading, setloading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setloading(false);
  //   }, 1500);
  // }, [loading]);
  const {navigation} = props;
  const url = props?.route?.params?.url;
  const {
    components,
    pageData: {title},
  } = fetchData(url);
  navigation.setOptions({headerTitle: title});

  return (
    <View style={{flex: 1}}>
      {loading && (
        <LottieView
          source={require('../../assets/loader.json')}
          autoPlay
          loop
          style={styles.loading}
          resizeMode="cover"
        />
      )}
      {!loading && (
        <>
          <NavBar />
          <ScrollView>
            {components.map((component, index) => {
              const Component = getComponent(component.type);
              return (
                <Component
                  key={index}
                  data={component.data}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  loading: {
    width: 150,
    alignSelf: 'center',
    marginTop: 100,
  },
});
