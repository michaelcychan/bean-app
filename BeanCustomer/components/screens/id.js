import * as React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../stylesheet';

export const Id = ({navigation, route}) => {

  // console log run to see what's being passed to this page as a parameter
  console.log(`params=${route.params.email}`)

  return (
    <View style={styles.container}>
      <Text>Member Number</Text>
      {/* member number currently hardcoded, needs a route and controller added to the back end to be called with fetch */}
      <Text>0000-0001</Text>
    </View>
  );
};
