import React, { useState } from 'react';
import { 
    FlatList,  
    StyleSheet,
    View, 
} from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'Germano Kuerten',
        description: 'Supa Flush',
        image: require('../assets/mano.png')
    },
    {
        id: 2,
        title: 'Leonardo da Vinci',
        description: 'Hey man, I flush with your flush.',
        image: require('../assets/leo.png')
    },
    {
        id: 3,
        title: 'Michelangelo di Lodovico',
        description: 'I saw the angel in the marble and carved untill it became a toilet',
        image: require('../assets/miche.png')
    },
    {
        id: 4,
        title: 'Vincent van Gogh',
        description: 'I flush my painting and I paint my flush',
        image: require('../assets/vincent.png')
    },
    {
        id: 5,
        title: 'Eric Alfred Satie',
        description: 'Before I compose a piece, I walk around it several times, accompanied by myflush',
        image: require('../assets/eric.png')
    },
    {
        id: 6,
        title: 'Anita Garibaldi',
        description: 'Great flush at target!',
        image: require('../assets/anita.png')
    },
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        // Delete the message from messagees array
        setMessages(messages.filter(m => m.id !== message.id))
        // Call the server to delete message from the backend
    }

    return (
        <Screen>
        <FlatList 
            data={messages} 
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => (
                <ListItem 
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('Message selected', item)}
                    renderRightActions={() => 
                        <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: 'Leonardo da Vinci',
                        description: 'Hey, it is me again!',
                        image: require('../assets/leo.png')
                    },
                ])
            }}
        />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;