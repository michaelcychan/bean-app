import * as React from 'react';
import { View, Button, Text } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
    <Button
      title="Go to Dave's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Dave' })
      }
    />
    <Button
      title="Go to Hello World"
      onPress={() =>
        navigation.navigate('Hello World')
      }
    />
    </View>
  );
};

export const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
    <Text>This is {route.params.name}'s profile</Text>
    <Button 
      title="Hello World" 
      onPress={() => 
        navigation.navigate('Hello World')
      }
    />
    </View>
  )
};

export const HelloWorldScreen = ({ navigation, route }) => {
  return <Text>Hello World.</Text>
}