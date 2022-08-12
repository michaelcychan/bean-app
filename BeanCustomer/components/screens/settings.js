import * as React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet';

export const Settings = ({ navigation, route}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() =>
          navigation.navigate('Home')
        }
      >
        <Text style={styles.primaryButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}