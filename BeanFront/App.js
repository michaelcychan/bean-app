import React, {Component, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// We are using the "Class", not the function (Hook) 
class BeanApp extends Component {
  state = {
    bean: 0
  }

  onPress = () => {
    this.setState({
      bean: this.state.bean + 1
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
         <TouchableOpacity style={styles.button} onPress={this.onPress}><Text>Add 🫘 Beans</Text></TouchableOpacity>
         <View>
          <Text>
            Number of beans: {this.state.bean}
          </Text>
         </View>
      </View>
    );
  }
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
