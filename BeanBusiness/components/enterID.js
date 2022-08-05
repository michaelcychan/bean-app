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
  TextInput,
} from 'react-native';
import {styles} from './stylesheets';

export const EnterID = ({navigation}) => {

  const [drinkerID, onChangeDrinkerID] = React.useState(null);


  const findDrinkerID = () => {
    return fetch(`http://localhost:5050/barista/finddrinker/${drinkerID}`)
      .then(response => response.json())
      .then(json => {
        console.log(json.bean_count);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDrinkerID}
          value={drinkerID}
          placeholder="Enter customer's membership ID"
          keyboardType="numeric"
          maxLength={6}
        />
      </SafeAreaView>
      <Button
        title="Search User"
        onPress={() =>
          findDrinkerID()
          // navigation.navigate('Customer Profile Screen', {
          //   name: 'Customer Name Profile Page',
          // })
        }
      />
    </>
  );
};

