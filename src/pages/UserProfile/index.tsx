import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
//import NavBar from '../../components/NavBar';
import {Avatar} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {selectUserData} from '../../redux/userSlice';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {setSignedIn, setUserData} from '../../redux/userSlice';
import {useDispatch, useSelector} from 'react-redux';

const MyAccountScreen = () => {
  const userData = useSelector(selectUserData);
  console.log('userData', userData);
  const options = [
    {
      id: '1',
      title: 'My Orders',
      icon: 'reorder',
    },
    {
      id: '2',
      title: 'My Address',
      icon: 'address-card-o',
    },
    {
      id: '3',
      title: 'Help',
      icon: 'smile-o',
    },
    {
      id: '4',
      title: 'Logout',
      icon: 'user',
    },
  ];
  return (
    <View style={styles.root}>
      <View style={styles.avtarContainer}>
        <Avatar
          size="xlarge"
          title={userData.name
            .split(' ')
            .map(n => n[0])
            .join('')}
          rounded
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          containerStyle={styles.avtar}
        />
        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
      </View>
      <View style={styles.menu}>
        <FlatList
          data={options}
          renderItem={({item}) => MyordersOption(item)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    height: Dimensions.get('window').height,
  },
  avtar: {
    marginTop: 20,
    alignSelf: 'center',
  },
  avtarContainer: {
    backgroundColor: '#d1fffc',
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  userEmail: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 10,
  },
  menu: {
    marginTop: 10,
  },
  menuOptions: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingBottom: 10,
    marginVertical: 10,
    borderBottomColor: '#b1b6bd',
    borderBottomWidth: 0.7,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  icon: {
    width: 30,
  },
});
export default MyAccountScreen;
interface MyordersOptionProps {
  icon: string;
  title: string;
}
const MyordersOption = (item: MyordersOptionProps) => {
  const option = item;
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.menuOptions}>
          <FontAwesome
            style={styles.icon}
            name={item.icon}
            size={25}
            color={'#33BFB7'}
          />
          {item.title.toLowerCase() === 'logout' ? (
            <Text style={styles.title} onPress={logout}>
              {item.title}
            </Text>
          ) : (
            <Text style={styles.title}>{item.title}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const logout = async () => {
  console.log('test');

  // const dispatch = useDispatch();
  // try {
  //   // await GoogleSignin.revokeAccess();
  //   // await GoogleSignin.signOut();
  //   dispatch(setSignedIn(false));
  //   dispatch(setUserData(null));
  //   console.log('userData', userData);

  //   //setUser({}); // Remember to remove the user from your app's state as well
  // } catch (error) {
  //   console.error(error);
  // }
};
