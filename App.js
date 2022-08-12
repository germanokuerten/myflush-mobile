import React from "react";
import { View, Text } from "react-native-web";
import MessagesScreen from "./app/screens/MessagesScreen";

import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";


export default function App() {
  return (
    <Screen>
      <ListItem 
        title="My title"
        ImageComponent={<Icon name="email" />}
      />
    </Screen>
  );
}