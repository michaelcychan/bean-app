import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Home, SignUp, SignIn, Id, Beans, Settings } from './components/Screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Id' component={Id} />
      <Tab.Screen name='Beans' component={Beans} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  )
} 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'The Bean App' }}
        />
        <Stack.Screen 
          name="Sign Up" 
          component={SignUp} 
          options={{ title: 'The Bean App'}}
        />
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{ title: 'The Bean App' }}
        />
        <Stack.Screen 
          name="BeanApp" 
          component={HomeTabs} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
