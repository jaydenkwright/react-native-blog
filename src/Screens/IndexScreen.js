import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../Context/BlogContext'
import { Feather } from '@expo/vector-icons'

export default function IndexScreen({ navigation }) {
    const { state, deletePost } = useContext(Context)

    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={(post) => post.title}
                renderItem={({ item }) => {
                    return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>  
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={() => deletePost(item.id)}>
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}

IndexScreen.navigationOptions =({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                                <Feather name="plus" size={30} />   
                            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 10,
        borderTopWidth: 1,
        paddingHorizontal: 10,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})