import React, { createContext, useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodosContext = createContext()

export const TodosProvider = ({children}) =>{
    const [todos, setTodos] = useState([])
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() =>{
        loadTodo()
      }, [])
    
      const loadTodo = async () =>{
        try{
          const todos = await AsyncStorage.getItem('todos')
          if (todos !== null){
            setTodos(JSON.parse(todos))
          }
        } catch (error) {
          Alert.alert("Errore durante il caricamento dei todo")
        }
      }

    const handleComplete = async (indexTodo) =>{
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

      const deleteTodo = async (indexTodo, navigation) => {
        navigation.navigate('Home')
        try{
            const newSavedTodo = todos.filter((item, index) => index !== indexTodo)
            await AsyncStorage.setItem('todos', JSON.stringify(newSavedTodo))
            setTodos(newSavedTodo)
        } catch (error) {
          console.log(error);
            Alert.alert("Errore con l'eliminazione del todo")
        }
    }

    const saveTodo = async (text, closeModal) =>{
        try{
            if(text === ''){
                Alert.alert('Devi inserire almeno un carattere per creare un todo')
            }else {
                const newTodo = { text: text, completed: false }
                const newSavedTodo = [...todos, newTodo]
                await AsyncStorage.setItem('todos', JSON.stringify(newSavedTodo))
                setTodos(newSavedTodo)
                closeModal()
            }
        } catch (error){
            Alert.alert('Si è verificato un errore con il salvataggio')
        }
    }

    const modTodo = async (text, closeModal, indexTodo) => {
      try{
        if(text === ''){
          Alert.alert("Devi inserire almeno un carattere per modificare un todo")
        }else {
          const newTodos = [...todos]
          newTodos[indexTodo].text = text
          await AsyncStorage.setItem('todos', JSON.stringify(newTodos))
          setTodos(newTodos)
          closeModal()
        }
      } catch (error) {
        Alert.alert("Impossibili modificare il todo")
      }
    }

    return (
        <TodosContext.Provider value={{todos, setTodos, handleComplete, deleteTodo, saveTodo, isSelected, setIsSelected, modTodo}}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContext
