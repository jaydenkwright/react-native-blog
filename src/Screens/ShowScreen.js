import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../Context/BlogContext'

export default function ShowScreen({ navigation }) {
    const { state } = useContext(Context)
    const id = navigation.getParam('id')
    const post = state.find((p) => p.id == id)
    return (
        <View>
            <Text>{post.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

