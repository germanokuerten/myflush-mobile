import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/background5.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/myflush2.png")}/>
                {/* tag line */}
                <Text>Find and Flush</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 60,
        backgroundColor: '#fc5c65'
    },
    registerButton: {
        width: '100%',
        height: 60,
        backgroundColor: '#4ecdc4'
    },
    logo: {
        width: 90,
        height: 90,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
})

export default WelcomeScreen;