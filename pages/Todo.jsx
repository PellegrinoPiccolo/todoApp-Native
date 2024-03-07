import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Dimensions, Alert, FlatList, Button, TouchableOpacity } from 'react-native';
import Navbar from '../components/Navbar';
import Icon from "react-native-vector-icons/FontAwesome6";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import TodosContext from '../context/TodosContext';
import CheckBox from 'expo-checkbox';

const Todo = ({route, navigation}) => {

    const { handleComplete, deleteTodo, isSelected, setIsSelected } = useContext(TodosContext)

    const { todoText, todoCompleted, indexTodo } = route.params;

    useEffect(() => {
        setIsSelected(todoCompleted)
    }, [])

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            animated={true}
            backgroundColor="orange"
            barStyle={'light-content'}
        />
        <Navbar />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
            <Icon
                name="arrow-left"
                color="#fff"
                size={24}
            />
        </TouchableOpacity>
        <View style={styles.screen}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    disabled={false}
                    value={isSelected}
                    onValueChange={() => (handleComplete(indexTodo))}
                    color={'orange'}
                    style={styles.checkBox}
                />
            </View>
            <Text style={[styles.todoText, isSelected ? {textDecorationLine: 'line-through'} : '']}>{todoText}</Text>
            <Button title="DELETE" color="red" onPress={() => deleteTodo(indexTodo, navigation)}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        position: 'relative',
    },
    screen: {
        minHeight: '100%',
        backgroundColor: 'lightyellow',
        width: '100%',
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
    },
    todoText: {
        fontSize: 21,
        textAlign: 'center',
        marginTop: 18,
    },
    backButton: {
        position: 'absolute',
        top:18,
        left: 18,
    },
    checkboxContainer: {
        position: 'absolute',
        top: 18,
        right: 18,
    },
    checkBox: {
        borderRadius: 5,
        padding: 10,
    }
})

export default Todo
