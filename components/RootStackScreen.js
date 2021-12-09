import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';
import NavBar from './NavBar';
import ScannProduct from './ScanProduct';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator >

        <RootStack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignIn" component={SignIn} />
        <RootStack.Screen name="SignUp" component={SignUp} />



    </RootStack.Navigator>
);

export default RootStackScreen;