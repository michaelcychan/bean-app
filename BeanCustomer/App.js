import * as React from 'react';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Settings} from './components/screens/settings';
import {Home} from './components/screens/home';
import {SignIn} from './components/screens/signIn';
import {SignUp} from './components/screens/signUp';
import {Id} from './components/screens/id';
import {Beans} from './components/screens/beans';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from 'react-native';
import {Feather} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// creating a tab navigation component containing the screens seen when logged in
const BeanTabs = ({props, route}) => {
  // sets a variable as the user id of the logged in user, passed from the login page
  const user = route.params.user;

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1C24F5',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {/* this screen given a separate title as it isn't the home screen, but we want the user to see that */}
      <Tab.Screen
        name="Id"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}>
        {() => <Id user={user} />}
      </Tab.Screen>
      <Tab.Screen
        name="Beans"
        component={Beans}
        initialParams={{user: user}}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Beans',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="coffee" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const BeanApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // turning off the stack navigator header so it can't be used for navigation
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Sign In" component={SignIn} />
        {/* this screen contains the tab navigator with the other 3 screens in */}
        <Stack.Screen name="BeanApp" component={BeanTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BeanApp;
