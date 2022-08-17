import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import { date } from 'yup';

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
    
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem('cache' + key, JSON.stringify(value))
    } catch (error) {
        console.log(error);
    }
}

const isExpired = (item) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    return now.diff(storedTime, 'minutes') > 5
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key);
        const item = JSON.parse(value) 

        if(!item) return null;

        
        if (isExpired(item)) {
            // Command Query Separation (CQS)
            await AsyncStorage.removeItem(prefix + key)
            return null;
        }

        return item.value;

    } catch (error) {
        console.log(error)
    }
}

export default {
    store,
    get,
}