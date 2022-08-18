import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permisssions from 'expo-permissions'

import expoPushTokensApi from '../api/expoPushTokens'

export default useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications();

        if (notificationListener) Notifications.addPushTokenListener(notificationListener);
    }, []);

    const registerForPushNotifications = async () => {
        try {
            const permission = await Permisssions.askAsync(Permisssions.NOTIFICATIONS);
            if (!permission.granted) return;
    
            const token = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token);
        } catch (error) {
            console.log('Error getting a push token', error);
        }
    }
}