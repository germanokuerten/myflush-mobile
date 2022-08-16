import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes'
import Screen from '../components/Screen';

const listings = [
    {
        id: 1,
        title: 'Clean Bathroom',
        price: 1,
        image: require('../assets/bathroom.jpg')
    },
    {
        id: 2,
        title: 'Super Clean',
        price: 0,
        image: require('../assets/background3.jpg')
    },
]

function ListingsScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem={({ item }) => (
                    <Card 
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item) }
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
})

export default ListingsScreen;