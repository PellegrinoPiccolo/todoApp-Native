import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Dimensions, Alert, FlatList, Button, TouchableOpacity } from 'react-native';
import Navbar from '../components/Navbar';
import Icon from "react-native-vector-icons/FontAwesome6";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Todo = ({route, navigation}) => {

    const { todoText, indexTodo, todos, setTodos } = route.params;

    const deleteTodo = async () => {
        try{
            const newSavedTodo = todos.filter((item, index) => index !== indexTodo)
            await AsyncStorage.setItem('todos', JSON.stringify(newSavedTodo))
            setTodos(newSavedTodo)
            navigation.navigate('Home')
        } catch (error) {
            Alert.alert("Errore con l'eliminazione del todo")
        }
    }

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
            <Text style={styles.todoText}>{todoText}</Text>
            <Button title="DELETE" color="red" onPress={deleteTodo}/>
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
    },
    backButton: {
        position: 'absolute',
        top:18,
        left: 18,
    }
})

export default Todo
