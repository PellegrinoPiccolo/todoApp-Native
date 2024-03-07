import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome6";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodosContext from '../context/TodosContext';
import CheckBox from 'expo-checkbox';

const Card = ({todoText, todoCompleted, indexTodo, navigation}) => {

  const { handleComplete, isSelected, setIsSelected } = useContext(TodosContext)

  const openTodo = () => {
    navigation.navigate('Todo', { todoText, todoCompleted, indexTodo });
  }

  const maxLength = 22

  useEffect(() => {
    setIsSelected(todoCompleted)
  }, [])

  return (
    <View style={styles.card}>
      <CheckBox
        disabled={false}
        value={isSelected}
        onValueChange={() => (handleComplete(indexTodo))}
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