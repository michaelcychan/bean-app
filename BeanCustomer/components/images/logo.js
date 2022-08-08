import * as React from 'react';
import {View, Button, Text, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet';

export const Logo = ({navigation}) => {
  return (
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Home')
        }
      >
        <Image 
          source={require('./CoffeeMug.png')} 
          style={{ width: 60, height: 60 }}
        />
      </TouchableOpacity>
  )
}