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

export const EnterID = ({navigation}) => {
  const [drinkerID, onChangeDrinkerID] = React.useState(null);

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
          navigation.navigate('Customer Profile Screen', {
            name: 'Customer Name Profile Page',
          })
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
