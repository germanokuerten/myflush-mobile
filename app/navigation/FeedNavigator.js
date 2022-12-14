import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from 'react-navigation-stack';

import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
            name="Listings" 
            component={ListingsScreen}  
            options={{
                title: 'Profile',
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}    
        />
        <Stack.Screen 
            name="ListingDetails" 
            component={ListingDetailsScreen} 
            options={{
                title: 'Profile',
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}    
        />
    </Stack.Navigator>
)

export default FeedNavigator;