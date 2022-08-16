import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../config/colors';

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="toilet" color={colors.white} size={44}/>
        </View>
        </TouchableOpacity>
    );
}

export default NewListingButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 35,
        borderWidth: 3,
        bottom: 20,
        height: 67,
        justifyContent: 'center',
        width: 67,
    }
})