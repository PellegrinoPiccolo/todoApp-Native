import React from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Card = ({todoText, indexTodo, todos, setTodos}) => {

  const deleteTodo = async () =>{
    try{
      const newSavedTodo = todos.filter((item, index) => index !== indexTodo)
      await AsyncStorage.setItem('todos', JSON.stringify(newSavedTodo))
      setTodos(newSavedTodo)
    } catch (error) {
      Alert.alert("Errore nell'eliminazione del todo")
      console.log(error);
    }
  }

  return (
    <View style={styles.card}>
        <View>
            <Text style={{fontSize: 15}}>{todoText}</Text>
        </View>
        <Button title='DELETE' color={'red'} onPress={deleteTodo}/>
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
    }
})

export default Card