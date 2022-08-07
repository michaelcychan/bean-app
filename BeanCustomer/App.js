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

// creating a tab navigation component containing the screens seen when logged in
const BeanTabs = ({ props, route }) => {
  // sets a variable as the user id of the logged in user, passed from the login page
  const userId = route.params.user

  return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#B40909',
        }}>
          {/* this screen given a separate title as it isn't the home screen, but we want the user to see that */}
        <Tab.Screen name="Id" options={{title: 'Home'}}>
          {() => <Id userId={userId} />}
        </Tab.Screen>
        <Tab.Screen name="Beans" component={Beans} initialParams={{ userId: userId}} /> 
        <Tab.Screen name="Settings" component={Settings} />
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
