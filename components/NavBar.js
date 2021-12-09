// import * as React from 'react';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // const Stack = createNativeStackNavigator();
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createBottomTabNavigator();
// import Home from './Home'
// import SignIn from './authentication/SignIn';
// import SignUp from './authentication/SignUp';
// import ScannProduct from './ScannProduct';
// import SearchBar from './HealthyRecepes/SearchBar';
// export default function NavBar() {
//     return (



//         <Tab.Navigator initialRouteName="Home"
//             activeColor="green">
//             <Tab.Screen
//                 name="Home"
//                 component={Home}
//                 options={{
//                     tabBarLabel: 'Home',
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="home" color={color} size={size} />
//                     ),
//                 }}

//             />
//             <Tab.Screen name="SignIn" component={SignIn}
//                 options={{
//                     tabBarLabel: 'SignIn',
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="account" color={color} size={size} />
//                     ),
//                 }} />
//             <Tab.Screen name="SignUp" component={SignUp}
//                 options={{
//                     tabBarLabel: 'SignUp',
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="account" color={color} size={size} />
//                     ),
//                 }} />
//             <Tab.Screen name="Scan Product" component={ScannProduct}
//                 options={{
//                     tabBarLabel: 'Scann',
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="barcode-scan" color={color} size={size} />
//                     ),
//                 }} />
//             <Tab.Screen name="Search Recipes" component={SearchBar}
//                 options={{
//                     tabBarLabel: 'Search Recipes',
//                     tabBarIcon: ({ color, size }) => (
//                         <MaterialCommunityIcons name="search-web" color={color} size={size} />
//                     ),
//                 }} />

//         </Tab.Navigator>

//     )
// }
import React from 'react';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home'
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';
import ScannProduct from './ScanProduct';
import RootStackScreen from './RootStackScreen';

const HomeStack = createStackNavigator();
const ScannProductStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const NavBar = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        {/* <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        /> */}
        <Tab.Screen
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
            name="Scann Product"
            component={ScannProductStackScreen}
            options={{
                tabBarLabel: 'Scann Product',
                tabBarColor: '#d02860',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="barcode-scan" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default NavBar;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
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
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ScannProductStack.Screen name="Scann Product" component={ScannProduct} options={{
            headerLeft: () => (
                <MaterialCommunityIcons.Button name="barcode-scan" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></MaterialCommunityIcons.Button>
            )
        }} />
    </ScannProductStack.Navigator>
);
