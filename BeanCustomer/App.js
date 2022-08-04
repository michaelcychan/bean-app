import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Home, SignUp, SignIn, Id, Beans, Settings } from './components/Screens'

const Stack = createNativeStackNavigator();

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
          name="Id" 
          component={Id} 
          options={{ title: 'The Bean App' }}
        />
        <Stack.Screen 
          name="Beans" 
          component={Beans} 
          options={{ title: 'The Bean App' }}
        />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
