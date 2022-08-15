import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from './Icon';
import AppText from './AppText';

// PickerItem
function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <AppText>{item.label}</AppText>
        </View>
    );
}

export default CategoryPickerItem;

const styles = StyleSheet.create({
    container: {

    }
})