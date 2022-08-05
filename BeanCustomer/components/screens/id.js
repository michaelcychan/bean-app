import * as React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet';

export const Id = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>Member Number</Text>
      <Text>0000-0001</Text>
    </View>
  );
};
