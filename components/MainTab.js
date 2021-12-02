import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
import Home from './Home'
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';
import ScannProduct from './ScannProduct';
import SearchBar from './HealthyRecepes/SearchBar';
export default function MainTab() {
    return (



        <Tab.Navigator initialRouteName="Home"
            activeColor="green">
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}

            />
            <Tab.Screen name="SignIn" component={SignIn}
                options={{
                    tabBarLabel: 'SignIn',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="SignUp" component={SignUp}
                options={{
                    tabBarLabel: 'SignUp',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Scan Product" component={ScannProduct}
                options={{
                    tabBarLabel: 'Scann',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="barcode-scan" color={color} size={size} />
                    ),
                }} />


        </Tab.Navigator>

    )
}