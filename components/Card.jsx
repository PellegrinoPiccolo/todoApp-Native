import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome6";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Card = ({todoText, todoCompleted, indexTodo, todos, setTodos, navigation}) => {

  const openTodo = () => {
    navigation.navigate('Todo', { todoText, indexTodo, todos, setTodos });
  }

  const maxLength = 22

  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    setIsSelected(todoCompleted)
  }, [])

  const handleComplete = async () =>{
    setIsSelected(!isSelected)
    try{
      const newTodos = [...todos]
      newTodos[indexTodo].completed = !newTodos[indexTodo].completed
      setTodos(newTodos)
      await AsyncStorage.setItem('todos', JSON.stringify(newTodos))
    } catch (error) {
      console.log(error);
      Alert.alert("Impossibile completare il todo")
    }
  }

  return (
    <View style={styles.card}>
      <BouncyCheckbox
          size={25}
          isChecked={todoCompleted}
          fillColor="black"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "black" }}
          innerIconStyle={{ borderWidth: 2 }}
          onPress={handleComplete}
        />
        <View style={{width: '58%'}}>
            <Text style={isSelected ? {fontSize: 18, textDecorationLine: 'line-through'} : {fontSize: 18}} >{todoText.length > maxLength ? todoText.slice(0, maxLength) + '...' : todoText}</Text>
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