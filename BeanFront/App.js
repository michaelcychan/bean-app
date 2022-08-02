import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Using Hook / function instead of class
const BeanApp = (props) => {
  const [beanCount, setBeanCount] = useState(0);


  const handleClick = () => {
    setBeanCount(beanCount + 1);
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleClick}><Text>Add 🫘 Beans</Text></TouchableOpacity>
        <View>
        <Text>
          Number of beans: {beanCount}
        </Text>
        </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default BeanApp;
