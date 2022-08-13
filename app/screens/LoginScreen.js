import React from 'react';
import { Image, StyleSheet } from 'react-native'

import Screen from '../components/Screen';

function LoginScreen(props) {
    return (
        <Screen>
            <Image 
                style={styles.logo}
                source={require("../assets/myflush2.png")}/>
        </Screen>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})