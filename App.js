import React, { useState } from 'react';
import { View, Text, TabBarIOSItem } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import Screen from './app/components/Screen';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';

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

const AccountNavigator = () => <Screen><Text>Account</Text></Screen>

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
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user);
  }

  if (!isReady)
    return (<AppLoading 
      startAsync={restoreUser}
      onFinish={() => setIsReady(true)}
      onError={console.warn}/>)

  // const showNotification = () => {
  //   Notifications.scheduleNotificationAsync({
  //     title: 'Congratulations',
  //     body: 'Your order was successful', 
  //   }, {
  //     time: new Date().getTime() +2000,
  //   })
  // }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      </AuthContext.Provider>
  );
}


export default App;