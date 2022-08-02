import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AddBeanButton, RedeemDrinkButton} from './components/BeanButtons';

// Using Hook / function instead of class
const BeanApp = (props) => {
  const [beanCount, setBeanCount] = useState(0);

  return (
    <View style={styles.container}>
      <AddBeanButton style={styles.button} beanCount={beanCount} setBeanCount={setBeanCount} />
       
      <View>
        <Text>
          Number of beans: {beanCount}
        </Text>
        <RedeemDrinkButton style={styles.button} beanCount={beanCount} setBeanCount={setBeanCount} />
      
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
    marginTop: 10,
    marginBottom: 10
  }
})

export default BeanApp;
