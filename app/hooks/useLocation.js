import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {
    // a custom hook
    const [location, setLocation] = useState();

    const getLocation = async () => {

        try {
            const { granted } = await Location.requestForegroundPermissionsAsync()
            if (!granted) return;
            const { coords: {latitude, longitude} } = await Location.getLastKnownPositionAsync();
            // or Location.getCurrentPositionAsync
            setLocation({ latitude, longitude });    
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLocation();
    }, [])

    return location;
};

