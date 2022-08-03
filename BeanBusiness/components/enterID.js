import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

export const EnterID = ({navigation}) => {
  const [drinkerID, onChangeDrinkerID] = React.useState();

  return (
    <>
      <Text>Enter membership ID:</Text>
      <TextInput onChangeText={onChangeDrinkerID} value={drinkerID} />
      <Button
        title="Search User"
        onPress={() =>
          navigation.navigate('Customer Profile Screen', {
            name: 'Customer Name Profile Page',
          })
        }
      />
    </>
  );
};