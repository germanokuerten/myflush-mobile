import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import AppText from '../components/AppText';
import * as Progress from 'react-native-progress'
import LottieView from 'lottie-react-native'

import colors from '../config/colors';

function UploadScreen({ onDone, progress = 0, visible = false }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                { progress < 1 ? <Progress.Bar color={colors.secondary} progress={progress} width={150} /> : <LottieView autoPlay loop={false} onAnimationFinish={onDone} source={require('../assets/animations/done.json')} style={styles.animation}/>}
                
            </View>
        </Modal>
    );
}

export default UploadScreen;

const styles = StyleSheet.create({
    animation: {
        width: 150,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    }
})