import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Context } from '../Context/BlogContext'

export default function CreateScreen() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return (
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Body</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
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
