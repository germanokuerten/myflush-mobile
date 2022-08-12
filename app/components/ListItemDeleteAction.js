import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

function ListItemDeleteAction(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons 
                name="trash-can"
                size={35}
                color={colors.white}
            />
        </View>
    );
}

export default ListItemDeleteAction;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.delete,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    }
})