import * as React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet';

export const Id = (props) => {
  // sets userId variable from params when screen is created in tab navigator
  const userId = props.userId

  return (
    <View style={styles.container}>
      <Text>Member Number</Text>
      <Text>{userId}</Text>
    </View>
  );
};
