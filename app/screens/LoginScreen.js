import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require("../assets/myflush2.png")}/>

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
            >
                { ({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppButton 
                            title="Login" 
                            onPress={handleSubmit}
                        />
                    </>
                ) }
            </Formik>
        </Screen>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 30,
    }
})