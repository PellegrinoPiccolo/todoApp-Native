import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome6";

const Card = ({todoText, indexTodo, todos, setTodos, navigation}) => {

  const openTodo = () => {
    navigation.navigate('Todo', { todoText, indexTodo, todos, setTodos });
  }

  return (
    <View style={styles.card}>
        <View>
            <Text style={{fontSize: 15}}>{todoText}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={openTodo}>
          <Icon
            name="eye"
            color="#fff"
            size={24}
        />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 18,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
    },
    button: {
      backgroundColor: 'transparent',
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 2,
    }
})

export default Card