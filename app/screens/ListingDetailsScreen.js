import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/bathroom.jpg')}/>
            <AppText>Clean Bathroom</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100',
        height: 300,
    }
})

export default ListingDetailsScreen;