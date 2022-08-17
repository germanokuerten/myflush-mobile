import React from 'react';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { View } from 'react-native';
import { Button } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({id: 1}))
      const value = await AsyncStorage.getItem('person');
      const person = JSON.parse(value)
      console.log(person)
    } catch (person) {
      console.log(error);
    }
  }
  demo()
  return null
}