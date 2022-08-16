import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
        blurRadius={10}
        style={styles.background}
        source={require("../assets/background5.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/myflush2.png")}/>
                <Text style={styles.slogan}>My Flush</Text>
                {/* Find and Flush */}
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate('Login')}/>
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate('Register')}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
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
    slogan: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 7,

    },
})

export default WelcomeScreen;