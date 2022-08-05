import React, {Component, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const AddBeanButton = (props) => {
  const addBean = () => {
    props.setBeanCount(props.beanCount + 1);
  }
  return (
    <View>
      <TouchableOpacity style={props.style} onPress={addBean}><Text>Add 🫘 Beans</Text></TouchableOpacity>
    </View>
  );
};

export const RedeemDrinkButton = (props) => {
  const redeemDrink = () => {
    props.setBeanCount(props.beanCount - 10);
  }
  return (
    <View>
      <TouchableOpacity style={props.style} onPress={redeemDrink}><Text>Redeem a free ☕ drink</Text></TouchableOpacity>
    </View>
  );
}
