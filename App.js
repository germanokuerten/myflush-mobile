import React, { useState } from "react";

import Screen from "./app/components/Screen";
import { Switch } from "react-native";

export default function App() {
  
  const [isNew, setisNew] = useState(false)

  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setisNew(newValue)} />
    </Screen>
  );
}