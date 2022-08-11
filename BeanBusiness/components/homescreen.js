import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './stylesheets';

export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMethod="resize"
        source={require('./images/BeanLogo.png')}
        style={styles.homeImage}
      />
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <Text style={styles.subtitle}>Form relationships</Text>
        <Text>with loyal coffee drinkers</Text>
      </View>
      <TouchableOpacity
        style={styles.purpleButton}
        onPress={() => navigation.navigate('SignupFlow', {name: 'SignupNow'})}>
        <Text style={styles.buttontext}>Start building your customer base</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 30}}>Already have an account?</Text>
      <TouchableOpacity
        style={styles.purpleButton}
        onPress={() => navigation.navigate('Login', {name: 'LoginNow'})}>
        <Text style={styles.buttontext}>Go to the login page</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
