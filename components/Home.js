
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import SignIn from './authentication/SignIn';

import ScanProduct from './ScanProduct';
import RootStackScreen from './RootStackScreen';

const HomeStack = createStackNavigator();
const ScannProductStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Home = () => (

    <>
        <Tab.Navigator options={{ headerShown: false }}
            initialRouteName="Home"
            activeColor="#fff"
        >

            <Tab.Screen options={{ headerShown: false }}
                name="Home"
                component={RootStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="SingIn"
                component={SignIn}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#694fad',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Scan Product"
                component={ScannProductStackScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Scan Product',
                    tabBarColor: '#d02860',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="barcode-scan" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>


    </>




);

export default Home;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        // headerShown: false,
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={Home} options={{

            title: 'Overview',
            headerLeft: () => (
                <MaterialCommunityIcons.Button name="home" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></MaterialCommunityIcons.Button>
            )
        }} />
    </HomeStack.Navigator>
);

const ScannProductStackScreen = ({ navigation }) => (
    <ScannProductStack.Navigator screenOptions={{
        headerShown: false,
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ScannProductStack.Screen name="Scan Product" component={ScanProduct} options={{
            headerLeft: () => (
                <MaterialCommunityIcons.Button name="barcode-scan" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></MaterialCommunityIcons.Button>
            )
        }} />
    </ScannProductStack.Navigator>
);




