import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {styles} from './stylesheets';

export const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.primaryButtonText}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
