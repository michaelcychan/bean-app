/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './components/homeScreen';
import {EmailAndPasswordScreen} from './components/signUpFlow/emailAndPasswordScreen';
import {ShopNameScreen} from './components/signUpFlow/shopNameScreen';
import {ShopLogoScreen} from './components/signUpFlow/shopLogoScreen';
import {ShopWebsiteScreen} from './components/signUpFlow/shopWebsiteScreen';
import {OpeningHoursScreen} from './components/signUpFlow/openingHoursScreen';
import {CreateAccountScreen} from './components/signUpFlow/createAccountScreen';
import {LoginScreen} from './components/loginScreen';
import {ShopHome} from './components/shopHome';
import {SettingsScreen} from './components/settingsScreen';
// import {Feather} from '@expo/vector-icons';
// import {MaterialCommunityIcons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const SignUpStack = createNativeStackNavigator();

const SignUp = ({route, props}) => {
  return (
    <SignUpStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7C00F5',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <SignUpStack.Screen
        name="Email/Password"
        component={EmailAndPasswordScreen}
        options={{title: 'Email and Password'}}
      />
      <SignUpStack.Screen
        name="Name"
        component={ShopNameScreen}
        options={{title: 'Shop Name'}}
      />
      <SignUpStack.Screen
        name="Logo"
        component={ShopLogoScreen}
        options={{title: 'Shop Logo'}}
      />
      <SignUpStack.Screen
        name="Website"
        component={ShopWebsiteScreen}
        options={{title: 'Shop Website'}}
      />
      <SignUpStack.Screen
        name="Opening Hours"
        component={OpeningHoursScreen}
        options={{title: 'Opening Hours'}}
      />
      <SignUpStack.Screen
        name="Create Account"
        component={CreateAccountScreen}
      />
    </SignUpStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BeanBusinessTabs = ({props, route}) => {
  const shopId = route.params.shopId;
  const shopName = route.params.shopName;

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7C00F5',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Coffee Shop Home"
        component={ShopHome}
        initialParams={{shopId: shopId, shopName: shopName}}
        options={{
          title: shopName,
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{fontSize: 12, color: focused ? '#7C00F5' : color}}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('./components/images/BeanLogoPurple.png')
                  : require('./components/images/BeanLogoBlack.png')
              }
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
              }}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{fontSize: 12, color: focused ? '#7C00F5' : color}}>
              Settings
            </Text>
          ),
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('./components/images/settings.png')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
              }}
            />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignupFlow" component={SignUp} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BeanBusinessApp" component={BeanBusinessTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
