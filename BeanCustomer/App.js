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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BeanTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#B40909',
      // tabBarIconStyle: { display: 'none' } // removes icons from tab bar
      }}>
      <Tab.Screen name="Id" component={Id} options={{title: 'Home'}} />
      <Tab.Screen name="Beans" component={Beans}  />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const BeanApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="BeanApp" component={BeanTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BeanApp;
