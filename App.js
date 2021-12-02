import React, { useEffect } from 'react';

import ScannProduct from "./components/ScannProduct";
import FetchProduct from './components/FetchProduct';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, ActivityIndicator, Text, View, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchProductByName from './components/Fetchbyname/SearchProductByName';
import SearchBar from './components/HealthyRecepes/SearchBar';
import NavBar from './components/NavBar';
import RootStackScreen from './components/RootStackScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/DrawerContent';
import Home from './components/Home';
import { AuthContext } from './components/context';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage'
import About from './components/About';
import ContactUs from './components/ContactUs';
import MainTab from './components/MainTab';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function App() {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (userName, password) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if (userName == 'user' && password == 'pass') {
        try {
          userToken = 'dfgdfg';
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    // <SafeAreaView style={styles.container} >
    //   <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover" style={styles.image}>
    //     {/* <Text style={styles.text}>Eat </Text> */}
    //     <ScrollView>
    //       <View style={styles.body}>
    //         {/* <Header /> */}
    <ScannProduct />
    //         {/* <FetchProduct /> */}
    //         {/* <SearchProductByName /> */}
    //         <SearchBar />
    //       </View>
    //     </ScrollView>

    //   </ImageBackground>
    // </SafeAreaView>
    //   <AuthContext.Provider value={authContext}>

    //     <NavigationContainer style={styles.container}>

    //       {loginState.userToken !== null ? (
    //         <>
    //           <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    //             <Drawer.Screen name="Home" component={Home} />
    //             <Drawer.Screen name="ScannProduct" component={ScannProduct} />
    //             <Drawer.Screen name="SearchBar" component={SearchBar} />
    //             <Drawer.Screen name="About" component={About} />
    //             <Drawer.Screen name="ContactUs" component={ContactUs} />

    //           </Drawer.Navigator>


    //         </>
    //       )
    //         :
    //         <>

    //           <NavBar />
    //         </>
    //       }





    //     </NavigationContainer>
    //   </AuthContext.Provider>


  );





}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    // backgroundColor: "orange"


  },
  body: {
    flex: 4,
    width: "100%",

  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
});

