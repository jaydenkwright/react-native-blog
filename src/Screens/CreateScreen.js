import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../Context/BlogContext'

export default function CreateScreen({ navigation }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { addPosts } = useContext(Context)
    return (
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Body</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
            <Button title='Post' onPress={() => {
                addPosts(title, content, () => {
                    navigation.navigate('Index')
                })
            }} />
        </View>
    )
}

const styles = StyleSheet.create({  
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})
