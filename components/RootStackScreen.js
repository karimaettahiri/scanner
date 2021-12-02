import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';
import NavBar from './NavBar';
import ScannProduct from './ScannProduct';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator>

        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignIn" component={SignIn} />
        <RootStack.Screen name="SignUp" component={SignUp} />
        {/* <RootStack.Screen name="Scann" component={ScannProduct} /> */}


    </RootStack.Navigator>
);

export default RootStackScreen;