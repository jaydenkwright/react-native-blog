import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../Context/BlogContext'
import { EvilIcons} from '@expo/vector-icons'

export default function ShowScreen({ navigation }) {
    const { state } = useContext(Context)
    const id = navigation.getParam('id')
    const post = state.find((p) => p.id == id)
    return (
        <View>
            <Text>{post.title}</Text>
            <Text>{post.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity>
                <EvilIcons name='pencil' size={30} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

})

