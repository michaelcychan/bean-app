import * as React from 'react';
import {View, Button, Text, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet';

export const Home = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Image 
          source={require('../images/CoffeeMug.png')} 
          style={styles.image}
      />
      <Text>Receive free coffee</Text>
      <Text>From your favourite independant coffee shop</Text>
      {/* touchable opacity view used to allow navigation to Sign Up page */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sign Up')}>
        <Text>Sign up for rewards</Text>
      </TouchableOpacity>
      <Text>Already have an account?</Text>
        {/* touchable opacity view used to allow navigation to Sign In page */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sign In')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
