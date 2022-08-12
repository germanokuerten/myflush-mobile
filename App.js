import React from "react";
import { View, Text } from "react-native-web";
import MessagesScreen from "./app/screens/MessagesScreen";

import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";


export default function App() {
  return (
    <Screen>
      <Icon 
        name='email'
        size={100}
        backgroundColor='red'
        iconColor='white'
      />
    </Screen>
  );
}