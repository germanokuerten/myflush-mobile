import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen from './app/components/Screen';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Tweets = () => (
  <Screen>
    <Text> Tweets </Text>
  </Screen>
)

const TweetDetails = () => (
  <Screen>
    <Text> TweetDetails </Text>
  </Screen>
)

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets}/>
    <Stack.Screen name="TweetDetails" component={TweetDetails}/>
  </Stack.Navigator>
)

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}


export default App;