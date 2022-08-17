import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import AppText from '../components/AppText';
import * as Progress from 'react-native-progress'

function UploadScreen({ progress = 0, visible = false }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                <AppText>{progress * 100}%</AppText>
            </View>
        </Modal>
    );
}

export default UploadScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    }
})