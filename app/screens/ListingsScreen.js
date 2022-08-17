import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton'
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import useApi from '../hooks/useApi';
// import { Button } from 'react-native';

// const listings = [
//     {
//         id: 1,
//         title: 'Clean Bathroom',
//         price: 1,
//         image: require('../assets/bathroom.jpg')
//     },
//     {
//         id: 2,
//         title: 'Super Clean',
//         price: 0,
//         image: require('../assets/background3.jpg')
//     },
// ]

function ListingsScreen({ navigation }) {

    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        getListingsApi.request(1, 2, 3);
    }, []); 

    

    return (
        <>
            <ActivityIndicator visible={getListingsApi.loading} />
        <Screen style={styles.screen}>
            {getListingsApi.error && <>
                <AppText>Couldn't flush the listings.</AppText>
                <AppButton title="Flush again" onPress={getListingsApi.request} />
            </>}
            <FlatList 
                data={getListingsApi.data}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) => (
                    <Card 
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item) }
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />
                )}
            />
        </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
})

export default ListingsScreen;