import React, { useContext, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Dimensions, Alert, FlatList, Button, TouchableOpacity, ScrollView } from 'react-native';
import Navbar from '../components/Navbar';
import Icon from "react-native-vector-icons/FontAwesome6";
import TodosContext from '../context/TodosContext';
import CheckBox from 'expo-checkbox';
import ModButton from '../components/ModButton';

const Todo = ({route, navigation}) => {

    const { handleComplete, deleteTodo, isSelected, setIsSelected, todos} = useContext(TodosContext)

    const { todoCompleted, indexTodo } = route.params;

    const todoText = todos[indexTodo].text

    useEffect(() => {
        setIsSelected(todoCompleted)
    }, [])

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
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
        </ScrollView>
        <ModButton textTodo={todoText} indexTodo={indexTodo}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        position: 'relative',
        minHeight: Dimensions.get('window').height,
    },
    screen: {
        minHeight: Dimensions.get('window').height - 50,
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
