import React, {Component, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AddBeanButton, RedeemDrinkButton} from './BeanButtons';

export const MainPage = (props) => {
  const secondPage = () => {
    
  }

  return (
    <View style={props.styles.container}>
      <View>
        <TouchableOpacity style={props.styles.button} onPress={secondPage}><Text> Second Page </Text></TouchableOpacity>
      </View>
      <AddBeanButton style={props.styles.button} beanCount={props.beanCount} setBeanCount={props.setBeanCount} />
       
      <View>
        <Text>
          Number of beans: {props.beanCount}
        </Text>
        {(props.beanCount >= 10) // condition ? true to show button : false to show Text
          ? <RedeemDrinkButton style={props.styles.button} beanCount={props.beanCount} setBeanCount={props.setBeanCount} />
          : <Text> Earn 10 beans for a free drink</Text>
        }
      </View>
    </View>
  );
}