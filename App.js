import React from 'react';
import { View, Text, TabBarIOSItem } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './app/components/Screen';

const Link = () => {

  const navigation = useNavigation();
  
  return (
    <Button 
      title="Click"
      onPress={() => navigation.navigate("TweetDetails") } />
  )
}

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text> Tweets </Text>
//     <Link />
//   </Screen>
// )

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button 
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text> TweetDetails {route.params.id} </Text>
  </Screen>
)

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'dodgerblue' },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen 
      name="Tweets" 
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: 'white',
        headerShown: false,
      }}  
    />
    <Stack.Screen 
      name="TweetDetails" 
      component={TweetDetails}
      options={({ route }) => ({ title: "TweetDetails" })}  
    />
  </Stack.Navigator>
)

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: 'tomato',
      tabBarActiveTintColor: 'white',
      tabBarInactiveBackgroundColor: '#eee',
      tabBarInactiveTintColor: 'black',
    }}
  >
    <Tab.Screen 
      name="Feed" 
      component={FeedNavigator}
    />
    <Tab.Screen name="Account" component={AccountNavigator}/>
  </Tab.Navigator>
)

function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}


export default App;