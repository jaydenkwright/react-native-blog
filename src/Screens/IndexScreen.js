import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../Context/BlogContext'
import { Feather } from '@expo/vector-icons'

export default function IndexScreen() {
    const { state, addPosts, deletePost } = useContext(Context)

    return (
        <View>
            <Button 
                title='Add Posts'
                onPress={addPosts} 
                />
            <FlatList 
                data={state}
                keyExtractor={(post) => post.title}
                renderItem={({ item }) => {
                    return (<View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deletePost(item.id)}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>)
                }}
            />

        </View>
    )
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