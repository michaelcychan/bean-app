import * as React from 'react';
import {View, Button, Text, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet';

export const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require('../images/BeanLogoWhite.png')}
          style={styles.homeImage}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Get free coffee, from your</Text>
        <Text style={styles.subtitle}>favourite coffee shop!</Text>
        {/* touchable opacity view used to allow navigation to Sign Up page */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Sign Up')}>
          <Text style={styles.primaryButtonText}>Sign up for rewards</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', fontWeight: 'bold', marginTop: 30}}>
          Already have an account?
        </Text>
        {/* touchable opacity view used to allow navigation to Sign In page */}
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.secondaryButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
