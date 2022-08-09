import React from 'react';
import {NavigationContainer, Text, View} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './components/homeScreen';
import {SignupScreen} from './components/signUpScreen';
import {LoginScreen} from './components/loginScreen';
import {ShopHome} from './components/shopHome';
import {PERMISSIONS, check, request} from 'react-native-permissions';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const [cameraGranted, setCameraGranted] = React.useState(false);

  const handleCameraPermission = async () => {
    const res = await check(PERMISSIONS.IOS.CAMERA);
    
    if (res === RESULTS.GRANTED) {
      setCameraGranted(true);
    } else if (res === RESULTS.DENIED) {
      const res2 = await request(PERMISSIONS.IOS.CAMERA);
      res2 === RESULTS.GRANTED 
        ? setCameraGranted(true)
        : setCameraGranted(false)
    }
  }; 
  React.useEffect(() => {
    handleCameraPermission(); 
  }, []);

  const displayCameraPermission = () => {
    return (
      <View>
        {cameraGranted
        ? <Text>Camera Granted! Display in-app camera...</Text> 
        : <Text>Camera Disallowed</Text>
      }
      </View>
    )
  };


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Coffee Shop Home" component={ShopHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
