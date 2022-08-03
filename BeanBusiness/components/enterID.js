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
  const [number, onChangeNumber] = React.useState(null);

  return (
    <>
      <Text>Enter membership ID:</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless beans"
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
