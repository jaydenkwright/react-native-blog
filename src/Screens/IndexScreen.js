import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context } from '../Context/BlogContext'

export default function IndexScreen() {
    const { state, addPosts } = useContext(Context)

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
                    return <Text>{item.title}</Text>
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({

})